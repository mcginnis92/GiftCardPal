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
        spent: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    updateAmount = event => {
        console.log('id: ', this.state.id)
        event.preventDefault();

        let newTotal = this.state.amount - this.state.spent;

        API.updateCard(this.state.id, {amount: newTotal})
        // .then(this.state.toggle)
        .then(window.location = '/home')
        .catch(err => console.log(err));
    }

    removeCard = event => {
        API.deleteCard(this.state.id)
        .then(window.location = '/home')
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
                                    // placeholder="" 
                                    onChange={this.handleInputChange} />
                            </InputGroup>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.removeCard}>Remove this Card</Button>
                        <Button bsStyle="primary" onClick={this.updateAmount}>Update</Button>
                    </Modal.Footer>
            
                </Modal.Dialog>
            </div>
        )
    }    
};


export default GiftCardModal;