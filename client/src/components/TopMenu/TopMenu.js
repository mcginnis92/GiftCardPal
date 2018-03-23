import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import "./TopMenu.css";

const TopMenu = props => (
    <Row className="top-menu">
        <Col xs={2}></Col>
        <Col xs={10}><h1>Gift Card Pal</h1></Col>
    </Row>

);

export default TopMenu;