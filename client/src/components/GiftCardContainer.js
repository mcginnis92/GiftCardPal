import React, { Component } from 'react';
import GiftCard from './GiftCard';
import API from '../utils/API';

class GiftCardContainer extends Component {

  state = {
    giftcards: []
  };

  componentDidMount = () => {
    API.getCards()
    .then(res => this.setState({giftcards : res.data }))
    .catch(err => console.log(err));
};

  render() {
    return (
      this.state.giftcards.map(elem => <GiftCard name={elem.name} amount={elem.amount} category={elem.category} key={elem.id}/>)
    );
  }
}

export default GiftCardContainer;
