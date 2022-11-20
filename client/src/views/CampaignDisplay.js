import React, { useState } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";

export default function CampaignDisplay() {

    const [flag, setFlag] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [goal, setGoal] = useState("");

    const handleClick = () => {
        setFlag(true); 
    }

    const handleSubmit = () => {
        // createCampaign(title, desc, Number(goal));
    }
  return (
    <div className='content'>
      <h1> Welcome to our Community</h1>
      <Button onClick={handleClick}>Create Campaign</Button>
      {flag ? 
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Enter details of your campaign</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Title</label>
                        <Input
                          placeholder="Enter your title"
                          type="text"
                          onChange={e => {setTitle(e.target.value)}}
                          value={title}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-3" sm="10">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          placeholder="Enter your description"
                          type="textarea"
                          onChange={e => {setDesc(e.target.value)}}
                          value={desc}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-3" md="4">
                      <FormGroup>
                        <label>Goal (ETH)</label>
                        <Input
                          placeholder="Enter your goal"
                          type="number"
                          onChange={e => {setGoal(e.target.value)}}
                          value={goal}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                    <Button color='danger' type='submit'>Post it !!!</Button>
                </Form>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
          </Row> : ""}
          <Row>
            <Col>
                <h4 style={{marginTop: 20}}>Checkout all the ongoing campaigns and please do your part</h4>
            </Col>
          </Row>
          <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <h5 className="title">Title</h5>
              </CardHeader>
              <CardBody>
                <p>description</p>
              </CardBody>
              <CardFooter>
              <h5>goal</h5>
              <Button color='danger'>Donate</Button>
              </CardFooter>
            </Card>
          </Col>
          </Row>
    </div>
  )
}
