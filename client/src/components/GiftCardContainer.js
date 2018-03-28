import React, { Component } from 'react';
import GiftCard from './GiftCard';
import API from '../utils/API';
import GiftCardModal from './GiftCard/GiftCardModal';

class GiftCardContainer extends Component {

  state = {
    giftcards: [],
    modal: false,
    number: ''
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

  toggleModal = (number) => {
    this.setState({
      modal: !this.state.modal,
      number: number
    });
    console.log(number, "gcnum")
  };

  render() {
    return (
      <div>
        {this.state.modal && <GiftCardModal toggle={this.toggleModal} number={this.state.number}/>}
        {this.state.giftcards.map(elem => <GiftCard name={elem.name} amount={elem.amount} category={elem.category} number={elem.number} pin={elem.pin} key={elem._id} toggle={this.toggleModal} id={elem._id}/>)}
      </div>
    );
  }
}

export default GiftCardContainer;
