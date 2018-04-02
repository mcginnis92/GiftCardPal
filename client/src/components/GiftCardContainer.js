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
    id: '',
    image: ''
  };

  componentDidMount = () => {
    console.log(this.props._id)
    API.getUserGC({
      _id: this.props._id
    })
    // .then(res => console.log(res.data.giftcards))
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));
  };

  componentDidUpdate = () => {
    API.getUserGC({
      _id: this.props._id
    })
    // .then(res => console.log(res.data.giftcards))
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));
  }
 
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
    console.log(this.state.giftcards, 'this.state.giftcards');

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
