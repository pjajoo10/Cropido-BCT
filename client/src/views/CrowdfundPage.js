import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { 
    Row, 
    Col,
    Card,
    CardBody,
    CardText,
    Button
 } from 'reactstrap'
import CampaignDisplay from './CampaignDisplay';
import { Link } from 'react-router-dom';

export default function CrowdfundPage() {

    const [flag, setFlag] = useState(false);

    const loadUser = async () => {
        const web3 = new Web3(Web3.givenProvider || window.ethereum);

        if (! web3) {
            return alert("Please install MetaMask.");
        }

        const accounts = await web3.eth.requestAccounts();

        if (accounts.length > 0) {
            // localStorage.setItem("ACCOUNT", accounts[0]);
        console.log(accounts[0]);
           setFlag(true);
        }
    }

    useEffect(() => {
        
    }, [])
  return (
    <div className='content'>
    {flag ? <CampaignDisplay/> : 
    <Row>
        <Col>
        <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                    <h1 className="title">A platform to encourage our farmers</h1>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/growth.png")}
                      style={{marginRight: 20}}
                    />
                  <h4 className="description">
                      Hey, you can donate some ethers to your fellow farmates or raise funds for yourself. 
                  </h4>
                  <h4 className="description">
                      Please Sign Up with your Metamask account to get started
                  </h4>
                  <Button onClick={loadUser}>Log In with Metamask</Button>
                </div>
              </CardBody>
            </Card>
        </Col>
      </Row>}
    </div>
  )
}
