// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public players;
    uint public entryFee = 0.1 ether;

    address winner;

    uint _end;

    // enums
    enum LotteryStatus {
        START, STARTED, ENDED
    }

    // events
    event WinnerDeclared(address winner, uint winningPrice);

    LotteryStatus public status = LotteryStatus.START;

    // modifiers
    modifier isManager {
        require(msg.sender == manager, "You are not the manager");
        _;
    }

    constructor() {
        manager = msg.sender;
    }

    // get all players
    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    // start the lottery
    function start() public isManager {
        require(status == LotteryStatus.START, "Lottery has already been started or ended.");

        status = LotteryStatus.STARTED;

        // time for lottery
        // _end = block.timestamp;
    }

    // enter the lottery
    function enter() public payable {
        require(!isParticipate(msg.sender), "You are already a participant");
        require(msg.value >= entryFee, "Entry fee is less then 0.1 ether");
        require(status == LotteryStatus.STARTED, "Lottery has not started or its ended.");

        players.push(msg.sender);
    }

    function isParticipate(address _participant) private view returns(bool) {
        for(uint i=0; i<players.length; i++) {
            if(players[i] == _participant) {
                return true;
            }
        }
        return false;
    }

    // get random
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function end() public isManager {
        status = LotteryStatus.ENDED;

        require(players.length > 0, "0 participants");
        uint winnerIndex = random() % players.length;
        winner = players[winnerIndex];
        uint priceMoney = winningPrice();

        // transfer everything to winner;
        payable(winner).transfer(address(this).balance);

        // reset players.
        players = new address[](0);


        // winner declared event;
        emit WinnerDeclared(winner, priceMoney);
    }

    function getWinner() public view returns (address) {
        return winner;
    }

    // get winning price
    function winningPrice() public view returns(uint) {
        return address(this).balance;
    }
}