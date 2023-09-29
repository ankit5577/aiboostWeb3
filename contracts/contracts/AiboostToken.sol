// contracts/AiboostToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract AiboostToken is ERC20Upgradeable, OwnableUpgradeable {
    uint256 public tokenPrice;

    event FundTransfer(address _to, uint256 _amount);

    function initialize(string memory name, string memory symbol) public initializer {
        __ERC20_init(name, symbol);
        __Ownable_init();
        _mint(msg.sender, 1000000 * 10 ** decimals());

        tokenPrice = 0.001 ether;
    }

    function setTokenPrice(uint256 _price) external onlyOwner {
        require(_price > 1e10, "TOKEN:::LOW_PRICE");
        tokenPrice = _price;
    }

    function buyTokensDirect() external payable {
        require(msg.value >= 1e10, "TOKEN::MIN_THRESHOLD");
        require(tokenPrice >= 1e10, "TOKEN::PRICE_NOT_SET");

        uint256 _calculateTokens = ((msg.value * 1 ether) / (tokenPrice * 1 ether)) * 1 ether;

        _mint(msg.sender, _calculateTokens);
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }

    function transferFundsToOwner() external onlyOwner {
        require(owner() != address(0), "TOKEN::OWNER_NOT_SET");
        address _owner = owner();
        uint256 _amount = address(this).balance;
        payable(_owner).transfer(_amount);

        emit FundTransfer(_owner, _amount);
    }
}
