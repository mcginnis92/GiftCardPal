import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, InputGroup, Button } from 'react-bootstrap';
import API from '../../utils/API';
import './GiftCardForm.css'

class Form extends React.Component {
    state = {
        name: '',
        amount: '',
        category: '',
        number: '',
        pin: '',
        file: '',
        imagePreviewUrl: '',
        loggedIn: true,
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    
    getPhoto = e => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log("file: ", file);

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file);
    }
    
    handleFormSubmit = event => {
        event.preventDefault();

        API.saveCard({
            userId: "5abe59322b750a5550f0e861", //update this once we can get the props.userid from login
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            number: this.state.number,
            pin: this.state.pin,
            image: this.state.imagePreviewUrl
            })
            // .then(window.location = '/home')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    
    render() {

        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        
        if (imagePreviewUrl) {
          imagePreview = (<img src={imagePreviewUrl} alt="preview"/>);
        } else {
          imagePreview = (<div className="previewText">Your image will be previewed here.</div>);
        }

        return (
            <Row>
                <Col xs={12}>
                    <form action='.' encType="multipart/form-data">
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

                        <ControlLabel>Upload an image your gift card. Make sure it contains the full gift card number and PIN.</ControlLabel> 
                        <div>
                            <input type='file' onChange={this.getPhoto}/>
                        
                            <div className="imgPreview">
                                {imagePreview}
                            </div>
                        </div>

                        <br />
                        <Button onClick={this.handleFormSubmit} block>Submit</Button>
                    </form>

                </Col>
            </Row>
        );
    }
}

export default Form;
