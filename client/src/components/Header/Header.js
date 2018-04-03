import React from "react";
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Header.css";

const Header = props => (
    <Row className="header">
        <Col xs={12} text="center">Gift Card Pal</Col>
    </Row>
);

export default Header;