// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract CampaignInfo {
    // address public owner = msg.sender;

    enum CampaignStatus{ OPEN, CLOSED }
    struct Campaign {
        uint campaign_id;
        address payable campaign_owner;
        string campaign_title;
        string campaign_desc;
        uint campaign_goal;
        uint raised_amount;
        CampaignStatus status;
    }

    Campaign[] public campaigns;

    // Create a new campaign
    function createCampaign(
        string memory _title,
        string memory _desc,
        uint _goal
    ) public returns(string memory){
        require(_goal > 0, "Campaign goal can't be 0!");

        uint _campaign_id = campaigns.length;
        campaigns.push(
            Campaign(
                _campaign_id,
                payable(msg.sender),
                _title,
                _desc,
                _goal,
                0,
                CampaignStatus.OPEN
            )
        );
        return "Campaign created!";
    }

    // receive() external payable {}

    // Check campaign status
    function checkCampaignStatus(uint _campaign_id) public view returns(CampaignStatus) {
        require(_campaign_id < campaigns.length, "Campaign does not exist!");
        return campaigns[_campaign_id].status;
    }

    // Get all campaigns
    function getCampaigns() public view returns(Campaign[] memory) {
        return campaigns;
    }
}