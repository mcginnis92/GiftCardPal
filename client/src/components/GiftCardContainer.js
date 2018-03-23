import React, { Component } from 'react';
import GiftCard from './GiftCard';

const giftCardArr = [
  {id: 0, name:"Bed Bath and Beyond", amount: 25, category: "Retail", active: true, date:"2018-03-14 18:40:07.142Z"},
  {id: 1, name:"Francesca's", amount: 50, category: "Dining", active: true, date:"2018-03-15 18:40:07.142Z"},
  {id: 2, name:"Divvy Bike", amount: 100, category:"Activities", active: true, date:"2018-03-16 18:40:07.142Z"},
  {id: 3, name:"CrossTown Fitness", amount: 200, category: "Health and Wellness", active: true, date:"2018-03-16 18:40:07.142Z"},
];

class GiftCardContainer extends Component {
  render() {
    return (
      giftCardArr.map(elem => <GiftCard name={elem.name} amount={elem.amount} category={elem.category} key={elem.id}/>)
    );
  }
}

export default GiftCardContainer;
