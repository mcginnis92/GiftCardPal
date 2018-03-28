import React from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./Splash.css";

const Splash = props => (
    <Grid>
        <Row>
            <h3>Never forget a gift card again.</h3>
        </Row>
        <Row> 
            <h4>How it Works</h4>
            <p>Snap a photo of your gift card so that the number and PIN are clearly visible.</p>
            <p>Upload the photo to your Gift Card Pal account.</p>
            <p>Simply show the photo of your gift card to your cashier or server so that they can validate the payment.</p>
        </Row>
        <br />
        <br />
        <Row>
            <Col xs={12}>
                <Button bsSize="large" block id="green" href="/login">Sign In </Button> 
                <br/>
                <Button bsSize="large" block id="blue" href="/signup">Create an Account </Button> 
            </Col>  
        </Row>
    </Grid>
);

export default Splash;