import React, { Component } from 'react';
import GiftCard from './GiftCard';
import API from '../utils/API';
import GiftCardModal from './GiftCard/GiftCardModal';

class GiftCardContainer extends Component {

  state = {
    giftcards: [],
    modal: false,
    number: '',
    name: '',
    pin: '',
    amount: '',
    id: ''
  };

  componentDidMount = () => {
    API.getUserGC({
      username: 'moose@moose.com'
    })
    // .then(res => console.log(res.data.giftcards))
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));

  };

  toggleModal = (number, name, pin, amount, id) => {
    this.setState({
      modal: !this.state.modal,
      number: number,
      name: name,
      pin: pin,
      amount: amount,
      id: id
    });
    console.log(number, "gcnum")
  };

  render() {
    return (
      <div>
        {this.state.modal && 
        <GiftCardModal 
          toggle={this.toggleModal} 
          number={this.state.number} 
          name={this.state.name} 
          pin={this.state.pin}
          amount={this.state.amount}
          id={this.state.id}
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
        />)}
      </div>
    );
  }
}

export default GiftCardContainer;
