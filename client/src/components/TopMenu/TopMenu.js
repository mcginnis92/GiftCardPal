import React, {Component} from "react";
import { Row, Col } from 'react-bootstrap';
import "./TopMenu.css";

const TopMenu = props => (
    <Row className="top-menu">
        <Col xs={12}>
            {/* <h3>{props.name}'s Gift Cards</h3> */}
        </Col>
    </Row>
);

export default TopMenu;