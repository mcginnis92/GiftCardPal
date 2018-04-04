import React from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./Splash.css";

const Splash = props => (
    <Grid>
        <Row>
            <Col xs={12} md={6} mdOffset={3}>
                <h3>Never forget a gift card again.</h3>
            </Col>
        </Row>
        <Row> 
            <Col xs={12} md={6} mdOffset={3}>
                <h4><strong>How it Works</strong></h4>
                <p>Snap a photo of your gift card so that the number and PIN are clearly visible.</p>
                <p>Upload the photo to your Gift Card Pal account.</p>
                <p>Simply show the photo of your gift card to your cashier or server so that they can validate the payment.</p>
            </Col>
        </Row>
        <br />
        <br />
        <Row>
            <Col xs={6} md={3} mdOffset={3}>
                <Button bsSize="large" block id="green" href="/home">Sign In </Button> 
            </Col>
            <Col xs={6} md={3}>
                <Button bsSize="large" block id="blue" href="/signup">New User </Button> 
            </Col>  
        </Row>
    </Grid>
);

export default Splash;