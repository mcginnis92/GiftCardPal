import React, {Component} from "react";
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Icon from './Icon';
import "./GiftCard.css";
 
const GiftCard = props => {
    return (
        <Row className="border">
            <Icon category={props.category} />
            <Col xs={8}>
                <h3 className="name">{props.name}</h3>
                <h4>{props.category}</h4>
            </Col>
            <Col xs={2}>
                <h3>${props.amount}</h3>
            </Col>
        </Row>
    )
};

export default GiftCard;