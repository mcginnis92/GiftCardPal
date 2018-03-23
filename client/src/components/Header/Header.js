import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Header.css";

const Header = props => (
    <Row className="header">
        <Col xs={2}><FontAwesome name='user-circle-o' size="1.5x" /></Col>
        <Col xs={10}>Molly Moran</Col>
    </Row>

);

export default Header;