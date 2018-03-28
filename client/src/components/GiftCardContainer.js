import React, { Component } from 'react';
import GiftCard from './GiftCard';
import API from '../utils/API';
import GiftCardModal from './GiftCard/GiftCardModal';

class GiftCardContainer extends Component {

  state = {
    giftcards: [],
    modal: false,
    number: '',
    gcname: '',
    pin: ''
  };

  componentDidMount = () => {

    // API.checkUser({
    //   username: this.state.username,
    //   password: this.state.password,
    //   })
    //   .then(res => console.log(res.data))
    //   // .then(res => this.setState({name : res.data.name}))
    //   .catch(err => console.log(err))
    
    API.getUserGC({
      username: 'moose@moose.com'
    })
    // .then(res => console.log(res.data.giftcards))
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));

  };

  toggleModal = (number, name, pin) => {
    this.setState({
      modal: !this.state.modal,
      number: number,
      name: name,
      pin: pin
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
        />)}
      </div>
    );
  }
}

export default GiftCardContainer;
