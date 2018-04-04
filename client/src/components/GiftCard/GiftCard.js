import React from "react";
import { Row, Panel, Col } from 'react-bootstrap';
import Icon from './Icon';
import "./GiftCard.css";
 
const GiftCard = props => {
      
    return (
        <Row key={props.key}>
            <Panel onClick={() => props.toggle(props.number, props.name, props.pin, props.amount, props.id)} value={props.name} className="card">

                 <Panel.Body>
                    <Col xs={9}>
                        <h3 className="title">{props.name}</h3>
                        <h4 className="category">{props.category}</h4>
                        <h4>Balance: ${props.amount}</h4>
                    </Col>
                    <Col xs={3}>
                        <Icon category={props.category} />
                    </Col>
                </Panel.Body>
            </Panel>
        </Row>

    )
};

export default GiftCard;