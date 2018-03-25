import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Header.css";

const Header = props => (
    <Row className="header">
        {props.username ? 
            <Col xs={12}>
                <span><FontAwesome name='user-circle-o' size="2x" /></span>
                {props.username}
            </Col>
        : 
            <Col xs={12} text="center">Gift Card Pal</Col>
        }
    </Row>

);

export default Header;