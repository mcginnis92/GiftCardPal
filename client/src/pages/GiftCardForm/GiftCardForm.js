import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, InputGroup, Button } from 'react-bootstrap';
import API from '../../utils/API';
import ImageUpload from '../../components/GiftCard/ImageUpload';

class Form extends React.Component {
    state = {
        name: '',
        amount: '',
        category: '',
        number: '',
        pin: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
            
        API.saveCard({
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            number: this.state.number,
            pin: this.state.pin,
            image: this.state.image
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    
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
           
                                    <option value="select">Select One</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Dining">Dining</option>
                                    <option value="Health and Wellness">Health and Wellness</option>
                                    <option value="Retail">Retail</option>
                                </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Enter your gift card number.</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    value={this.state.number} 
                                    name="number" 
                                    placeholder="1245678910" 
                                    onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Enter the gift card PIN number (if applicable).</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    value={this.state.pin} 
                                    name="pin" 
                                    placeholder="1234" 
                                    onChange={this.handleInputChange} />
                        </FormGroup>

                        <ImageUpload />

                        {/* <ControlLabel>Upload an image your gift card. Make sure it contains the full gift card number and PIN.</ControlLabel> 
                        <input name="file" accept="image/*" type="file" onChange={this.handleFile} />
                        <br />
                         */}
                        <Button onClick={this.handleFormSubmit} block>Submit</Button>
                    </form>

                    <Row id="image" />

                </Col>
            </Row>
        );
    }
}

export default Form;
