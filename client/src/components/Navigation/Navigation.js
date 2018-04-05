import React from "react";
import { Row, Panel, Col, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./Navigation.css";
import API from '../../utils/API';
 
class Navigation extends React.Component {
    state = {
        selectedCategory: ''
    }

    switchCategory = eventKey => {
        console.log(eventKey)
        // switch(eventKey){
        //     case 1:
        //         return 'Dining'
        //         break;
        //     case 2:
        //         return 'Activities'
        //         break;
        //     case 3: 
        //         return 'Retail'
        //         break;
        //     case 4: 
        //         return 'Health and Wellness'
        //         break;
        // }
    }

    selectByCategory = (eventKey) => {
        const selected = this.switchCategory(eventKey)
        this.setState({
            selectedCategory: selected
        })
        // API.getCategoryGC({
        //   _id: this.props._id,
        //   category: this.state.selectedCategory
        // })
        // .then(res => this.setState({giftcards : res.data.giftcards}))
        // .catch(err => console.log(err));
      }

    render(){
        return (
            // <Nav bsStyle="pills" activeKey={1}>
            <Nav bsStyle="pills" onSelect={this.selectByCategory}>
                <NavItem bsClass="teal" ><FontAwesome name='credit-card' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={1} ><FontAwesome name='cutlery' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={2} ><FontAwesome name='music' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={3} ><FontAwesome name='shopping-cart' size="2x" /></NavItem>
                <NavItem bsClass="teal" eventKey={4} ><FontAwesome name='heartbeat' size="2x" /></NavItem>
            </Nav>
        )
    }

}

export default Navigation;