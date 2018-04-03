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

    addCard = (value) => {
        this.setState({
            redirect: value
        });
    }

    render(){
        console.log(this.state);

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

// const New = props => {

//     function handleClick() {
//         window.location ='/giftcard';
//     }

//     return (
//         <Row>
//             <Panel onClick={handleClick}>
//                 <Panel.Body>
//                     <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
//                     <h3>Add a New Card</h3>
//                 </Panel.Body>
//             </Panel>
//         </Row>
//     )
// };

export default New;