// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Lottery is Ownable {
    using SafeMath for uint256;

    address[] public players;
    uint256 public entryFee = 0.1 ether;
    address public winner;
    uint256 public endTime;
    address public manager;
    uint256 public commissionBasisPoints = 500;

    event WinnerDeclared(address winner, uint256 winningPrize);
    event CommissionWithdrawn(uint256 amount);

    enum LotteryStatus {
        NOT_STARTED,
        STARTED,
        ENDED
    }

    LotteryStatus public lotteryStatus;

    modifier onlyInStatus(LotteryStatus _status) {
        require(lotteryStatus == _status, "Invalid lottery status");
        _;
    }

    modifier nonReentrant() {
        require(lotteryStatus == LotteryStatus.STARTED, "Lottery not started");
        _;
    }

    /**
     * @dev Constructor function to initialize the lottery contract.
     */
    constructor(address _manager) {
        lotteryStatus = LotteryStatus.ENDED;
        manager = _manager;
    }

    /**
     * @dev Get the remaining time until the lottery ends.
     * @return The remaining time in seconds.
     */
    function getRemainingTime() public view returns (uint256) {
        if (lotteryStatus == LotteryStatus.STARTED) {
            if (endTime <= block.timestamp) {
                return 0;
            }
            return endTime - block.timestamp;
        }
        return 0;
    }

    /**
     * @dev Get details of a all players.
     * @return address[] containing players.
     */
    function getAllPlayers() external view returns (address[] memory) {
        address[] memory _players = new address[](players.length);
        for (uint256 i = 0; i < players.length; i++) {
            _players[i] = players[i];
        }
        return _players;
    }

    /**
     * @dev Start the lottery with a specified duration.
     * @param _timeInMinutes The duration of the lottery in minutes.
     */
    function start(uint256 _timeInMinutes) public onlyOwner onlyInStatus(LotteryStatus.ENDED) {
        require(_timeInMinutes > 0, "Time duration must be greater than 0");
        lotteryStatus = LotteryStatus.STARTED;
        endTime = block.timestamp.add(_timeInMinutes.mul(60));
    }

    /**
     * @dev End the lottery and select a random winner.
     */
    function end() public onlyInStatus(LotteryStatus.STARTED) {
        require(endTime <= block.timestamp, "You cannot end the lottery before the time");
        require(players.length > 0, "No participants");
        lotteryStatus = LotteryStatus.ENDED;

        uint256 winnerIndex = uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players, msg.sender))) % players.length;
        winner = players[winnerIndex];
        uint256 prizeMoney = address(this).balance;
        uint256 commission = (prizeMoney.mul(commissionBasisPoints)).div(10_000); // Calculate commission using basis points
        uint256 remainingPrize = prizeMoney - commission;

        payable(winner).transfer(remainingPrize);

        delete players;

        emit WinnerDeclared(winner, remainingPrize);
        emit CommissionWithdrawn(commission);

        // Send commission to owner
        payable(owner()).transfer(commission);
    }

    /**
     * @dev End the lottery if blocktime >= endTime
     */
    function closeIfEnded() public {
        if (endTime <= block.timestamp && players.length > 0 && lotteryStatus == LotteryStatus.STARTED) {
            end();
        }
    }

    /**
     * @dev Enter the lottery by sending an entry fee.
     */
    function enter() public payable nonReentrant {
        require(msg.value >= entryFee, "Entry fee is less");
        require(endTime > block.timestamp, "Time is up.");
        require(!isParticipating(msg.sender), "You are already a participant");
        players.push(msg.sender);

        closeIfEnded();
    }

    /**
     * @dev Check if a participant has already entered the lottery.
     * @param _participant The participant's address to check.
     * @return A boolean indicating whether the participant has entered.
     */
    function isParticipating(address _participant) private view returns (bool) {
        for (uint256 i = 0; i < players.length; i++) {
            if (players[i] == _participant) {
                return true;
            }
        }
        return false;
    }

    /**
     * @dev Allows the owner to withdraw any remaining funds after the lottery ends.
     */
    function withdrawRemainingFunds() public onlyOwner onlyInStatus(LotteryStatus.ENDED) {
        uint256 remainingBalance = address(this).balance;
        require(remainingBalance > 0, "No remaining funds to withdraw");
        payable(owner()).transfer(remainingBalance);
    }

    /**
     * @dev Change the entry fee for participating in the lottery.
     * @param _newFee The new entry fee in wei.
     */
    function changeEntryFee(uint256 _newFee) public onlyOwner {
        require(_newFee > 0, "Entry fee must be greater than 0");
        entryFee = _newFee;
    }

    /**
     * @dev Set the commission basis points.
     * @param _basisPoints The new commission basis points.
     */
    function setCommissionBasisPoints(uint256 _basisPoints) public onlyOwner {
        require(_basisPoints <= 10_000, "Commission basis points cannot exceed 100%");
        commissionBasisPoints = _basisPoints;
    }
}
