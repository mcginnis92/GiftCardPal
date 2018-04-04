import React from "react";
import { Row, Panel, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import "./New.css";
import GiftCardForm from "../../pages/GiftCardForm";
 
class New extends React.Component {
    state = {
        _id: this.props._id,
        redirect: false
    }

    /**
     * @function addCard triggers the gift card form to open
     * @param { boolean } value tells whether the page should redirect or not
     * @returns the gift card form if true
     */
    addCard = value => {
        this.setState({
            redirect: value
        });
    }

    render(){
        return (
            this.state.redirect ? 

                <GiftCardForm _id={this.state._id} toggle={this.addCard} />
            :
                <Row>
                    <Panel onClick={() => this.addCard(true)}>
                        <Panel.Body>
                            <Col xs={9}>
                                <h3>Add New</h3>
                                <h4></h4>
                            </Col>
                            <Col xs={3}>
                                <FontAwesome id="plus" name='plus-square-o' size="2x"/>
                            </Col>
                        </Panel.Body>
                    </Panel>
                </Row>
        )      
    }
}

export default New;