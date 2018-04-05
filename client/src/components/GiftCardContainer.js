import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import GiftCard from './GiftCard';
import API from '../utils/API';
import GiftCardModal from './GiftCard/GiftCardModal';
import Navigation from './Navigation';

class GiftCardContainer extends Component {

  state = {
    giftcards: [],
    modal: false,
    number: '',
    name: '',
    pin: '',
    amount: '',
    id: '',
    selectedCategory: ''
  };

  /**
   * @function componentDidMount makes a get request to obtain all of the user's gift cards
   * @returns the state updated with the user's gift card data
   */
  componentDidMount = () => {
    API.getUserGC({
      _id: this.props._id
    })
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));
  };

  selectByCategory = selectedCategory => {
    API.getCategoryGC({
      category: 'Activities'
    })
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));
  }

  /**
   * @function componentDidUpdate re-renders the gift cards after any changes have been made 
   * @returns the state updated with the user's gift card data
   */
  componentDidUpdate = () => {
    API.getUserGC({
      _id: this.props._id
    })
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));
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

  render() {

    return (
      <div>
        <Navigation />
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
