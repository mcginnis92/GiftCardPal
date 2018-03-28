import React from "react";
import { Row, Panel } from 'react-bootstrap';
import Icon from './Icon';
import "./GiftCard.css";
 
const GiftCard = props => {
      
    return (
        <Row key={props.key}>
            <Panel onClick={() => props.toggle(props.number)} value={props.name}>
                <Panel.Body>
                    <span><Icon category={props.category} /></span>
                    <h3 className="name">{props.name}</h3>
                    <h4>{props.category}</h4>
                    <h4>Balance: ${props.amount}</h4>
                </Panel.Body>
            </Panel>
        </Row>

    )
};

export default GiftCard;