import React, {Component} from "react";
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./New.css";
 
const New = props => {

    function handleClick() {
        alert('You have clicked on me');
      }
      
    return (
        <Row>
            <Panel>
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                <h3>Add a New Card</h3>
            </Panel>
        </Row>
    )
};

export default New;