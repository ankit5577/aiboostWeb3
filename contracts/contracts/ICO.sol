// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "hardhat/console.sol";

/**
 * @title ICO - An upgradeable ICO (Initial Coin Offering) contract for selling tokens.
 */
contract ICO is Initializable, OwnableUpgradeable {
    using SafeMathUpgradeable for uint256;
    using SafeERC20Upgradeable for IERC20Upgradeable;

    IERC20Upgradeable public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
    uint256 public discountRate;
    uint256 public minPurchase;
    uint256 public maxPurchase;
    uint256 public startTime;
    uint256 public endTime;
    bool public isICOActive;

    event TokensPurchased(address indexed buyer, uint256 tokensPurchased, uint256 totalPrice);
    event ICOStarted(uint256 startTime, uint256 endTime);
    event ICOEnded();

    modifier onlyAdmin() {
        require(owner() == _msgSender(), "Only admin can perform this operation");
        _;
    }

    modifier onlyDuringICO() {
        require(isICOActive, "ICO is not active");
        require(block.timestamp >= startTime && block.timestamp <= endTime, "ICO is not active");
        _;
    }

    /**
     * @dev Initializes the ICO contract.
     * @param _tokenContract The address of the ERC20 token contract.
     * @param _tokenPrice The base price of one token in wei.
     * @param _discountRate The initial discount rate for the ICO in basis points (0-10000).
     * @param _minPurchase The minimum purchase amount in wei.
     * @param _maxPurchase The maximum purchase amount in wei.
     * @param _startTime The start time of the ICO.
     * @param _endTime The end time of the ICO.
     */
    function initialize(
        address _tokenContract,
        uint256 _tokenPrice,
        uint256 _discountRate,
        uint256 _minPurchase,
        uint256 _maxPurchase,
        uint256 _startTime,
        uint256 _endTime
    ) external initializer {
        __Ownable_init();
        tokenContract = IERC20Upgradeable(_tokenContract);
        tokenPrice = _tokenPrice;
        discountRate = _discountRate;
        minPurchase = _minPurchase;
        maxPurchase = _maxPurchase;
        startTime = _startTime;
        endTime = _endTime;
        isICOActive = false;
    }

    /**
     * @dev Sets the discount rate for the ICO.
     * @param _newDiscountRate The new discount rate in basis points (0-10000).
     */
    function setDiscountRate(uint256 _newDiscountRate) external onlyAdmin {
        require(_newDiscountRate <= 10000, "Discount rate should be in basis points (0-10000)");
        discountRate = _newDiscountRate;
    }

    /**
     * @dev Calculates the token amount based on the ether amount.
     * @param _etherAmount The amount in wei sent for the purchase.
     * @return The number of tokens that can be purchased.
     */
    function calculateTokenAmount(uint256 _etherAmount) public view returns (uint256) {
        require(_etherAmount >= minPurchase, "Amount is less than the minimum purchase");
        require(_etherAmount <= maxPurchase, "Amount exceeds the maximum purchase");
        uint256 discountedPrice = tokenPrice.mul(10000 - discountRate).div(10000); // Basis points
        return _etherAmount.mul(1e18).div(discountedPrice);
    }

    /**
     * @dev Allows users to purchase tokens during the ICO.
     * @param _etherAmount The amount in wei to spend on token purchase.
     */
    function buyTokens(uint256 _etherAmount) external payable onlyDuringICO {
        require(_etherAmount >= minPurchase, "Amount is less than the minimum purchase");
        require(_etherAmount <= maxPurchase, "Amount exceeds the maximum purchase");
        uint256 tokenAmount = calculateTokenAmount(_etherAmount);

        require(tokenAmount > 0, "Invalid token amount");
        require(tokenContract.balanceOf(address(this)) >= tokenAmount, "Not enough tokens available");

        tokensSold = tokensSold.add(tokenAmount);

        tokenContract.safeTransfer(msg.sender, tokenAmount);

        emit TokensPurchased(msg.sender, tokenAmount, _etherAmount);
    }

    /**
     * @dev Ends the ICO and transfers any remaining tokens to the owner.
     */
    function endICO() external onlyAdmin {
        require(block.timestamp >= endTime, "ICO is still active");
        isICOActive = false;
        emit ICOEnded();
        uint256 contractBalance = tokenContract.balanceOf(address(this));
        require(contractBalance > 0, "No tokens to transfer");
        tokenContract.safeTransfer(owner(), contractBalance);
    }
}
