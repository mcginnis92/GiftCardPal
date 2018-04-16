import React, { Component } from 'react';
import { Alert, Row, Panel, Col, Nav, NavItem } from 'react-bootstrap';
import GiftCard from '../GiftCard';
import FontAwesome from 'react-fontawesome';
import API from '../../utils/API';
import GiftCardModal from '../GiftCard/GiftCardModal';
import './GiftCardContainer.css';

class GiftCardContainer extends Component {

  state = {
    giftcards: [],
    modal: false,
    number: '',
    name: '',
    pin: '',
    amount: '',
    id: '',
    category: ''
  };

  /**
   * @function componentDidMount makes a get request to obtain all of the user's gift cards
   * @returns the state updated with the user's gift card data
   */
  componentDidMount = () => {
    if (this.state.category){
      API.getCategoryGC({
        _id: this.props._id,
        category: this.state.category
      })
      .then(res => this.setState({giftcards : res.data.giftcards}))
      .catch(err => console.log(err));
    } 
    else {
      API.getUserGC({
        _id: this.props._id
      })
      .then(res => this.setState({giftcards : res.data.giftcards}))
      .catch(err => console.log(err));
    }
  };

  /**
   * @function componentDidUpdate re-renders the gift cards if any changes have been made 
   * @param prevProps
   * @param prevState the value of the previous state
   * @returns the state updated with the user's gift card data
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.category !== this.state.category) {
      if (this.state.category){
        API.getCategoryGC({
          _id: this.props._id,
          category: this.state.category
        })
        .then(res => this.setState({giftcards : res.data.giftcards}))
        .catch(err => console.log(err));
      } 
      else {
        API.getUserGC({
          _id: this.props._id
        })
        .then(res => this.setState({giftcards : res.data.giftcards}))
        .catch(err => console.log(err));
      }
    }
  }

  /**
   * @function toggleModal triggers a modal with the gift card information
   * @param {number} number the gift card number
   * @param {string} name the gift card name
   * @param {number} pin the gift card pin number
   * @param {amount} number the amount of money on the gift card
   * @param {number} id the gift card id
   * @returns a modal with the specified gift card's info
   */
  toggleModal = (number, name, pin, amount, id) => {
    this.setState({
      modal: !this.state.modal,
      number: number,
      name: name,
      pin: pin,
      amount: amount,
      id: id
    });
  };

  /**
   * @function switchCategory tells us which category the user selected
   * @param {event} eventKey refers to the event key that was clicked
   * @returns a category as a string that we will use to update the state
   */
  switchCategory = eventKey => {
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

  /**
   * @function selectByCategory sets the state to the category the user has selected
   * @param eventKey refers to the string returned from the switchCategory function
   * @returns the updated state
   */
  selectByCategory = eventKey => {
    const selected = this.switchCategory(eventKey)
    this.setState({category : selected})
  }

  render() {

    return (
      <div>
        <Nav bsStyle="pills" onSelect={this.selectByCategory}>
          <NavItem bsClass="teal" eventKey={1} ><FontAwesome name='credit-card' size="2x" /></NavItem>
          <NavItem bsClass="teal" eventKey={2} ><FontAwesome name='cutlery' size="2x" /></NavItem>
          <NavItem bsClass="teal" eventKey={3} ><FontAwesome name='music' size="2x" /></NavItem>
          <NavItem bsClass="teal" eventKey={4} ><FontAwesome name='shopping-cart' size="2x" /></NavItem>
          <NavItem bsClass="teal" eventKey={5} ><FontAwesome name='heartbeat' size="2x" /></NavItem>
        </Nav>

        {this.state.modal && 
        <GiftCardModal 
          toggle={this.toggleModal}
          number={this.state.number} 
          name={this.state.name} 
          pin={this.state.pin}
          amount={this.state.amount}
          id={this.state.id}
          image={this.state.image}
        />}

        {this.state.giftcards.map(elem => 
        <GiftCard
          name={elem.name} 
          amount={elem.amount} 
          category={elem.category} 
          key={elem._id} 
          number={elem.number}
          pin={elem.pin}
          toggle={this.toggleModal} 
          id={elem._id}
          image={elem.image}
        />)}
      </div>
    );
  }
}

export default GiftCardContainer;
