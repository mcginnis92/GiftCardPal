import React, {Component} from "react";
import { Row, Col } from 'react-bootstrap';
import "./TopMenu.css";

const TopMenu = props => (
    <Row className="top-menu">
        <h2>{props.name}</h2>
    </Row>
);

export default TopMenu;