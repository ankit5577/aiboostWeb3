// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Lottery.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract LotteryPool is ReentrancyGuard {
    using SafeMath for uint256;

    struct LotteryInfo {
        Lottery lotteryContract;
        address manager;
        uint256 endTime;
        uint256 totalPlayers;
    }

    mapping(address => LotteryInfo) public lotteriesMapping;
    address[] public lotteriesContractsAddresses;
    address public owner;

    event LotteryCreated(address indexed lotteryAddress, address indexed manager, uint256 endTime);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /**
     * @dev Create a new lottery with a specified duration.
     * @param _timeInMinutes The duration of the lottery in minutes.
     */
    function createLottery(uint256 _timeInMinutes) external onlyOwner nonReentrant {
        require(_timeInMinutes > 0, "Duration must be greater than 0");

        Lottery newLottery = new Lottery(msg.sender);
        newLottery.start(_timeInMinutes);

        uint256 endTime = block.timestamp.add(_timeInMinutes.mul(60));

        lotteriesMapping[address(newLottery)] = LotteryInfo({ lotteryContract: newLottery, manager: msg.sender, endTime: endTime, totalPlayers: 0 });

        lotteriesContractsAddresses.push(address(newLottery));

        emit LotteryCreated(address(newLottery), msg.sender, endTime);
    }

    /**
     * @dev Get the number of lottery contracts created in the pool.
     * @return The number of lottery contracts.
     */
    function getLotteryContractsCount() external view returns (uint256) {
        return lotteriesContractsAddresses.length;
    }

    /**
     * @dev Get details of a specific lottery contract.
     * @param _lotteryAddress The address of the lottery contract.
     * @return LotteryInfo struct containing contract information.
     */
    function getLotteryContractDetails(address _lotteryAddress) external view returns (LotteryInfo memory) {
        return lotteriesMapping[_lotteryAddress];
    }

    /**
     * @dev Get details of a all lottery contract.
     * @return LotteryInfo struct containing contract information.
     */
    function getLotteryContractsDetails() external view returns (LotteryInfo[] memory) {
        LotteryPool.LotteryInfo[] memory _lotteryInfos = new LotteryPool.LotteryInfo[](lotteriesContractsAddresses.length);
        for (uint256 i = 0; i < lotteriesContractsAddresses.length; i++) {
            address _lotteryAddress = lotteriesContractsAddresses[i];
            _lotteryInfos[i] = lotteriesMapping[_lotteryAddress];
        }
        return _lotteryInfos;
    }

    /**
     * @dev Get the addresses of all lottery contracts in the pool.
     * @return An array of lottery contract addresses.
     */
    function getLotteries() external view returns (address[] memory) {
        return lotteriesContractsAddresses;
    }

    /**
     * @dev Withdraw remaining funds from a lottery contract after it ends.
     * @param _lotteryAddress The address of the lottery contract.
     */
    function withdrawRemainingFunds(address _lotteryAddress) external onlyOwner nonReentrant {
        require(_lotteryAddress != address(0), "Invalid lottery address");
        LotteryInfo storage lottery = lotteriesMapping[_lotteryAddress];
        require(lottery.endTime <= block.timestamp, "Lottery has not ended yet");
        require(lottery.totalPlayers > 0, "No participants");

        lottery.lotteryContract.withdrawRemainingFunds();
    }

    /**
     * @dev Change the owner of the LotteryPool contract.
     * @param _newOwner The address of the new owner.
     */
    function changeOwner(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Invalid new owner address");
        owner = _newOwner;
    }

    receive() external payable {}

    // Fallback function to reject incoming Ether
    fallback() external {
        revert("Ether not accepted");
    }
}
