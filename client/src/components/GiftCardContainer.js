import React, { Component } from 'react';
import GiftCard from './GiftCard';
import API from '../utils/API';
import GiftCardModal from './GiftCard/GiftCardModal';

class GiftCardContainer extends Component {

  state = {
    giftcards: [],
    modal: false
  };

  componentDidMount = () => {

    // API.checkUser({
    //   username: this.state.username,
    //   password: this.state.password,
    //   })
    //   .then(res => console.log(res.data))
    //   // .then(res => this.setState({name : res.data.name}))
    //   .catch(err => console.log(err))
    console.log("mounted");
    API.getUserGC({
      username: 'moose@moose.com'
    })
    .then(res => this.setState({giftcards : res.data.giftcards}))
    .catch(err => console.log(err));

    // API.getCards()
    //   .then(res => this.setState({giftcards : res.data }))
    //   .catch(err => console.log(err));
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        {this.state.modal && <GiftCardModal toggle={this.toggleModal} />}
        {this.state.giftcards.map(elem => <GiftCard name={elem.name} amount={elem.amount} category={elem.category} key={elem._id} toggle={this.toggleModal}/>)}
      </div>
    );
  }
}

export default GiftCardContainer;
