import React, { Component } from "react";
// import * as ReactBootstrap from 'react-bootstrap';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup } from 'react-bootstrap';
import Axios from "axios";

class Form extends React.Component {
    state = {

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("form submitted", this.state);
        // if (this.state.title && this.state.author) {
        //     API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //     })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
    };
    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <form>
                        <h3>Add a Gift Card</h3>
                        {/* <FormGroup controlId="formBasicText" validationState={this.getValidationState()}> */}
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Enter a name for your gift card.</ControlLabel>
                                <FormControl type="text" value={this.state.value} placeholder="Example: My Store" onChange={this.handleInputChange}/>

                            <ControlLabel>Enter the current value of your gift card.</ControlLabel>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon>$</InputGroup.Addon> 
                                        <FormControl type="text" value={this.state.value} placeholder="100.00" onChange={this.handleInputChange}/>
                                    </InputGroup>
                                </FormGroup>

                            <ControlLabel>Select the appropriate category for your gift card.</ControlLabel> 
                                <FormControl componentClass="select" placeholder="select" value={this.state.value} onChange={this.handleInputChange}>
                                    <option value="select">Select One</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Dining">Dining</option>
                                    <option value="Health and Wellness">Health and Wellness</option>
                                    <option value="Retail">Retail</option>
                                </FormControl>

                                {/* <HelpBlock>placeholder help block</HelpBlock> */}
                        </FormGroup>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default Form;
