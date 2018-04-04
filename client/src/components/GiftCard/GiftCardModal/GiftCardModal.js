import React from "react";
import { Modal, Button, FormGroup, FormControl, InputGroup, ControlLabel } from 'react-bootstrap';
import "./GiftCardModal.css";
import API from '../../../utils/API';

class GiftCardModal extends React.Component {

    state = {
        toggle: this.props.toggle,
        id: this.props.id,
        name: this.props.name,
        number: this.props.number,
        pin: this.props.pin,
        amount: this.props.amount,
        image: this.props.image,
        spent: ''
    };

    /**
     * @function handleInputChange saves input value to the state as they are modified
     * @param event input change
     * @returns updated state
     */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    /**
     * @function updateAmount sends a put request to the gift card database to update the amount remaining
     * @param event a submission of the form field indicating a change was made
     * @returns the new total on the card
     */
    updateAmount = event => {
        event.preventDefault();
        let newTotal = this.state.amount - this.state.spent;

        API.updateCard(this.state.id, {amount: newTotal})
        .then(this.state.toggle)
        .catch(err => console.log(err));
    }

    /**
     * @function removeCard sends a delete request to the database
     * @param event clicking on the remove card button
     * @returns the updated list of gift cards
     */
    removeCard = event => {
        API.deleteCard(this.state.id)
        .then(this.state.toggle)
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.state.toggle}>
                        <Modal.Title><strong>{this.state.name}</strong></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Gift Card Number: {this.state.number}</p>
                        <p>PIN: {this.state.pin}</p>

                        <FormGroup>
                            <ControlLabel>How much did you spend?</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl 
                                    type="text" 
                                    value={this.state.spent}
                                    name="spent" 
                                    onChange={this.handleInputChange} />
                            </InputGroup>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.removeCard}>Remove this Card</Button>
                        <Button bsStyle="primary" onClick={this.updateAmount}>Update Amount</Button>
                    </Modal.Footer>
            
                </Modal.Dialog>
            </div>
        )
    }    
};


export default GiftCardModal;