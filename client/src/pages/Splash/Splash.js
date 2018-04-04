import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import "./Splash.css";

const Splash = props => (
    <div>
        <Row>
            <Col xs={12} md={6} mdOffset={3}>
                <h3>A Virtual Wallet for Gift Cards</h3>
            </Col>
        </Row>
        <Row> 
            <Col xs={12} md={6} mdOffset={3}>
                <h4 id="green"><strong>How it Works</strong></h4>
                <p>Gift Card Pal saves your gift card numbers, values, and categories for easy access.</p>
                <p>Your data is securely stored and updated in real time.</p>
                <p>Simply add a gift card to your account and update how much you spent to get a live update of your balance.</p>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} mdOffset={3} align="center">
                <h4 id="green"><strong>Ready to get started?</strong></h4>
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs={6} md={3} mdOffset={3}>
                <Button bsSize="large" block href="/home">Sign In </Button> 
            </Col>
            <Col xs={6} md={3}>
                <Button bsSize="large" block href="/signup">New User </Button> 
            </Col>  
        </Row>
    </div>
);

export default Splash;