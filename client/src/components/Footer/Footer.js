import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Footer.css";

const Footer = props => (
    <Row className="footer">
        <Col xs={12} className="text">Copyright &copy; 2018  |  Molly Moran</Col>
    </Row>

);

export default Footer;