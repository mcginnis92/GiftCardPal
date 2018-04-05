import React, { Component } from "react";
import { Row, Panel, Col, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Navigation.css";
import API from '../../utils/API';
 
class Navigation extends Component {
    state = {
        selectedCategory: ''
    };

    switchCategory = eventKey => {
        console.log(eventKey)
        switch(eventKey){
            case 1:
                return null
                break;
            case 2:
                return 'Dining'
                break;
            case 3:
                return 'Activities'
                break;
            case 4: 
                return 'Retail'
                break;
            case 5: 
                return 'Health and Wellness'
                break;
        }
    }

    selectByCategory = eventKey => {
        const selected = this.switchCategory(eventKey)
        console.log('selected', selected)

        API.getCategoryGC({
            _id: this.props._id,
            category: selected
        })
        .then(res => this.setState({giftcards : res.data.giftcards}))
        .catch(err => console.log(err));
    }

    render() {
        return (
            // <Nav bsStyle="pills" activeKey={1}>
            <Nav bsStyle="pills" onSelect={this.selectByCategory}>
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