import React, { Component } from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, Button } from 'react-bootstrap';
import Axios from "axios";
import API from '../../utils/API'

class Form extends React.Component {
    state = {
        name: '',
        amount: '',
        category: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("state: ", this.state);
    };
    
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log("form submitted", this.state);
            
    //     API.saveCard({
    //         name: this.state.title,
    //         amount: this.state.amount,
    //         category: this.state.category
    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // };
    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <form>
                        <h3>Add a Gift Card</h3>
                        {/* <FormGroup controlId="formBasicText" validationState={this.getValidationState()}> */}
                        <FormGroup>
                            <ControlLabel>Enter a name for your gift card.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.name} 
                                name="name" 
                                placeholder="My Store" 
                                onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup>
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
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select a category for your gift card.</ControlLabel> 
                                <FormControl 
                                    componentClass="select" 
                                    placeholder="select" 
                                    // value={this.state.value} 
                                    name="category" 
                                    onChange={this.handleInputChange}>
           >
                                    <option value="select">Select One</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Dining">Dining</option>
                                    <option value="Health and Wellness">Health and Wellness</option>
                                    <option value="Retail">Retail</option>
                                </FormControl>
                        </FormGroup>

                        <Button type="submit" block>Submit</Button>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default Form;
