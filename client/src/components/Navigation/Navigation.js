import React, { Component } from "react";
import { Row, Panel, Col, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Navigation.css";
import API from '../../utils/API';
 
class Navigation extends Component {
 
    render() {
        return (
            // <Nav bsStyle="pills" activeKey={1}>
            <Nav bsStyle="pills" onSelect={this.props.selectByCategory}>
                <NavItem bsClass="teal" eventKey={1} ><FontAwesome name='credit-card' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={2} ><FontAwesome name='cutlery' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={3} ><FontAwesome name='music' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={4} ><FontAwesome name='shopping-cart' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={5} ><FontAwesome name='heartbeat' size="2x" /></NavItem>
            </Nav>
        );
    }
}

export default Navigation;