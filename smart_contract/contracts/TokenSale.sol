// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./AiboostToken.sol";

contract TokenSale {
    address payable admin;
    AiboostToken public tokenContract;
    uint public tokenPrice;
    uint public tokenSold;

    event Sell(address _buyer, uint _amount);

    modifier isAdmin() {
        require(msg.sender == admin, "you are not the owner");
        _;
    }

    constructor(AiboostToken _contract, uint _tokenPrice) {
        admin = payable(msg.sender);
        tokenContract = _contract;
        tokenPrice = _tokenPrice;
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(msg.value >= _numberOfTokens * tokenPrice, "price is less");
        require(tokenContract.balanceOf(address(tokenContract)) >= _numberOfTokens, "available tokens are less");
        require(tokenContract.transfer(msg.sender, _numberOfTokens), "transfering is failed");

        tokenSold += _numberOfTokens;

        Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public isAdmin {
        // get balance of this Contract
        uint balance = tokenContract.balanceOf(address(tokenContract));
        require(tokenContract.transfer(admin, balance), "transfering is failed");
    }
}