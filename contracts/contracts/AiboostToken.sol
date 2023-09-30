// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "hardhat/console.sol";


/**
 * @title AiboostToken
 * @dev AiboostToken is an ERC20 token contract that allows for buying, minting, burning, transferring tokens,
 * and managing whitelisted minters.
 */
contract AiboostToken is ERC20Upgradeable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    using SafeMathUpgradeable for uint256;

    uint256 public tokenPrice;
    mapping(address => bool) public whitelistedMinters;

    event FundTransfer(address indexed to, uint256 amount);
    event MinterAdded(address indexed minter);
    event MinterRemoved(address indexed minter);

    /**
     * @param name The name of the token.
     * @param symbol The symbol of the token.
     */
    function initialize(string memory name, string memory symbol, address _minter) public initializer {
        __ERC20_init(name, symbol);
        __Ownable_init();
        __ReentrancyGuard_init();
        _mint(msg.sender, 10000 * 1e18); // Mint 10,000 tokens with 18 decimal places

        addMinter(_minter);

        tokenPrice = 1e15; // Initial token price: 0.001 ether in wei
    }

    /**
     * @dev Sets the token price.
     * @param price The new token price in wei.
     */
    function setTokenPrice(uint256 price) external onlyOwner {
        require(price > 0, "TOKEN: Price must be greater than 0");
        tokenPrice = price;
    }

    /**
     * @dev Allows the purchase of tokens directly by sending ether to the contract.
     * The number of tokens received is based on the amount of ether sent and the current token price.
     */
    function buyTokensDirect(uint256 _tokens) external payable nonReentrant {
        require(msg.value >= _tokens.mul(tokenPrice), "TOKEN: Invalid token demand.");
        require(msg.value > 0, "TOKEN: Amount must be greater than 0");
        require(tokenPrice > 0, "TOKEN: Token price not set");

        // Calculate the number of tokens to mint based on the sent ether and token price
        uint256 calculateTokens = msg.value.mul(1e18).div(tokenPrice); // 1 ether = 1e18 wei

        _mint(msg.sender, calculateTokens);
    }

    /**
     * @dev Mints tokens to the specified account.
     * @param account The address to which tokens will be minted.
     * @param amount The amount of tokens to mint.
     */
    function mintTokens(address account, uint256 amount) external onlyMinter {
        require(account != address(0), "TOKEN: Invalid address");
        require(amount > 0, "TOKEN: Amount must be greater than 0");
        _mint(account, amount);
    }

    /**
     * @dev Burns tokens from the specified account.
     * @param account The address from which tokens will be burned.
     * @param amount The amount of tokens to burn.
     */
    function burnTokens(address account, uint256 amount) external onlyMinter {
        require(account != address(0), "TOKEN: Invalid address");
        require(amount > 0, "TOKEN: Amount must be greater than 0");
        _burn(account, amount);
    }

    /**
     * @dev Transfers the contract's ether balance to the owner's address.
     */
    function transferFundsToOwner() external onlyOwner {
        require(owner() != address(0), "TOKEN: Owner not set");
        address payable ownerAddress = payable(owner());
        uint256 balance = address(this).balance;
        ownerAddress.transfer(balance);

        emit FundTransfer(ownerAddress, balance);
    }

    /**
     * @dev Adds an address to the list of whitelisted minters.
     * @param minter The address to be added as a whitelisted minter.
     */
    function addMinter(address minter) public onlyOwner {
        whitelistedMinters[minter] = true;
        emit MinterAdded(minter);
    }

    /**
     * @dev Removes an address from the list of whitelisted minters.
     * @param minter The address to be removed from the list of whitelisted minters.
     */
    function removeMinter(address minter) external onlyOwner {
        whitelistedMinters[minter] = false;
        emit MinterRemoved(minter);
    }

    /**
     * @dev Modifier to allow only whitelisted minters to call minting functions.
     */
    modifier onlyMinter() {
        require(whitelistedMinters[msg.sender], "TOKEN: Not a whitelisted minter");
        _;
    }
}
