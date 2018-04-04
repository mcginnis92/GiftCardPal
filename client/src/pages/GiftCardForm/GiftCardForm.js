import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, InputGroup, Button, Modal, HelpBlock, Alert } from 'react-bootstrap';
import API from '../../utils/API';
import './GiftCardForm.css'
import GiftCardContainer from '../../components/GiftCardContainer';

class GiftCardForm extends React.Component {
    state = {
        name: '',
        amount: '',
        category: '',
        number: '',
        pin: '',
        _id: this.props._id,
        toggle: this.props.toggle
    };

    /**
     * @function nameValidationState checks if the gift card name has a value
     * @param {string} this.state.name
     * @returns feedback to the user
     */
    nameValidationState = () => {
        const name = this.state.name;
        if (name.length) return 'success';
        return null;
    }

     /**
     * @function categoryValidationState checks if the gift card value has an input
     * @param {string} this.state.category
     * @returns feedback to the user
     */
    categoryValidationState = () => {
        const category = this.state.category;
        if (category.length) return 'success';
        return null;
    }

     /**
     * @function numValidationState checks if the gift card value is a number
     * @param {number} this.state.amount
     * @returns feedback to the user
     */
    numValidationState = () => {
        const amount = this.state.amount;
        if (isNaN(amount)) return 'error';
        else if (amount.length == 0) return null;
        else return 'success';
        return null;
    }

     /**
     * @function cardValidationState checks if the gift card number has 8 characters or more
     * @param {string} this.state.number
     * @returns feedback to the user
     */
    cardValidationState = () => {
        const length = this.state.number.length;
        if (length >= 8) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

     /**
     * @function pinValidationState checks if the gift card pin is a number
     * @param {number} this.state.pin
     * @returns feedback to the user
     */
    pinValidationState = () => {
        const pin = this.state.pin;
        if (isNaN(pin)) return 'error';
        else if (pin.length == 0) return null;
        else return 'success';
        return null;
    }

    /**
     * @function handleInputChange updates the state when changes to the form are made
     * @param {event} e changes to the input fields
     * @returns updated state
     */
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    
    /**
     * @function handleFormSubmit makes a post request to save the new gift card
     * @param {event} event submission of the form
     * @returns the updated gift card container with the new gift card
     */
    handleFormSubmit = event => {
        event.preventDefault();

        API.saveCard({
            userId: this.state._id, 
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            number: this.state.number,
            pin: this.state.pin,
            image: this.state.imagePreviewUrl
            })
            .then(this.state.toggle(false))
            .then(this.forceUpdate())
            .catch(err => console.log(err))
    };
    
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title><strong>Add a Gift Card</strong></Modal.Title>
                </Modal.Header>

                <Modal.Body>                    
                    <form>
                        <FormGroup validationState={this.nameValidationState()}>
                            <ControlLabel>Enter a name for your gift card.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.name} 
                                name="name" 
                                placeholder="My Store" 
                                onChange={this.handleInputChange} />
                            <FormControl.Feedback />
                            <HelpBlock>Name must only be letters.</HelpBlock>
                        </FormGroup>

                        <FormGroup validationState={this.numValidationState()}>
                            <ControlLabel>Enter the current value of your gift card.</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon> 
                                    <FormControl 
                                        type="text" 
                                        value={this.state.amount} 
                                        name="amount" 
                                        placeholder="100.00" 
                                        onChange={this.handleInputChange} />
                            </InputGroup>
                            <FormControl.Feedback />
                            <HelpBlock>Amount must only be numbers.</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect" validationState={this.categoryValidationState()}>
                            <ControlLabel>Select a category for your gift card.</ControlLabel> 
                                <FormControl 
                                    componentClass="select" 
                                    placeholder="select" 
                                    // value={this.state.value} 
                                    name="category" 
                                    onChange={this.handleInputChange}>
           
                                    <option value="select">Select One</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Dining">Dining</option>
                                    <option value="Health and Wellness">Health and Wellness</option>
                                    <option value="Retail">Retail</option>
                                </FormControl>
                                <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup validationState={this.cardValidationState()}>
                            <ControlLabel>Enter your gift card number.</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    value={this.state.number} 
                                    name="number" 
                                    placeholder="1245678910" 
                                    onChange={this.handleInputChange} />
                                <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup validationState={this.pinValidationState()}>
                            <ControlLabel>Enter the gift card PIN number (if applicable).</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    value={this.state.pin} 
                                    name="pin" 
                                    placeholder="1234" 
                                    onChange={this.handleInputChange} />
                                <FormControl.Feedback />
                        </FormGroup>

                        <br />
                        <Button onClick={this.handleFormSubmit} block>Submit</Button>
                    </form>
                </Modal.Body>

            </Modal.Dialog>
        );
    }
}

export default GiftCardForm;
