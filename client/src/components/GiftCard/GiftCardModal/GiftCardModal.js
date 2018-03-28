import React from "react";
import { Modal, Button, FormGroup, FormControl, InputGroup, ControlLabel } from 'react-bootstrap';
import "./GiftCardModal.css";

class GiftCardModal extends React.Component {

    state = {
        toggle: this.props.toggle,
        name: this.props.name,
        number: this.props.number,
        pin: this.props.pin,
        amount: ''
    };

    handleInputChange = event => {
        this.setState({
            amount: event.target.value
        });
    };

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
                            <ControlLabel>Update Amount Spent</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl 
                                    type="text" 
                                    value={this.state.amount}
                                    name="amount" 
                                    // placeholder="" 
                                    onChange={this.handleInputChange} />
                            </InputGroup>
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.state.toggle}>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
            
                </Modal.Dialog>
            </div>
        )
    }    
};


export default GiftCardModal;