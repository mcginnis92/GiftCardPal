import React from "react";
import { Row, Panel } from 'react-bootstrap';
// import FontAwesome from 'react-fontawesome';
import "./New.css";
 
const New = props => {

    function handleClick() {
        window.location ='/giftcard';
    }

    return (
        <Row>
            <Panel onClick={handleClick}>
                <Panel.Body>
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    <h3>Add a New Card</h3>
                </Panel.Body>
            </Panel>
        </Row>
    )
};

export default New;