// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./campaign.sol";

contract Donation is CampaignInfo {

    function donate(uint _campaign_id, uint donation_amount) public payable returns(string memory) {
        address payable _to = campaigns[_campaign_id].campaign_owner;

        require(_campaign_id < campaigns.length, "Campaign does not exist!");
        require(checkCampaignStatus(_campaign_id) == CampaignStatus.OPEN, "Campaign closed!");
        require(campaigns[_campaign_id].campaign_owner != msg.sender, "Can't donate to yourself!");

        _to.transfer(donation_amount);
        campaigns[_campaign_id].raised_amount += donation_amount;
        if (campaigns[_campaign_id].raised_amount >= campaigns[_campaign_id].campaign_goal) {
            campaigns[_campaign_id].status = CampaignStatus.CLOSED;
        }

        return "Donation successful";
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }
}