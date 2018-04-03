import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, InputGroup, Button, Modal, HelpBlock } from 'react-bootstrap';
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
        file: '',
        imagePreviewUrl: '',
        _id: this.props._id,
        toggle: this.props.toggle
    };

    nameValidationState = () => {
        const name = this.state.name;
        const letters = /^[A-Za-z]+$/;
        if (name.match(letters)) return 'success';
        else if (name.length == 0) return null;
        else return 'error';
        return null;
    }

    categoryValidationState = () => {
        const category = this.state.category;
        if (category.length) return 'success';
    }

    numValidationState = () => {
        const amount = this.state.amount;
        if (isNaN(amount)) return 'error';
        else if (amount.length == 0) return null;
        else return 'success';
        return null;
    }

    cardValidationState = () => {
        const length = this.state.number.length;
        if (length >= 8) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    pinValidationState = () => {
        const pin = this.state.pin;
        if (isNaN(pin)) return 'error';
        else if (pin.length == 0) return null;
        else return 'success';
        return null;
    }

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
            userId: this.state._id, //update this once we can get the props.userid from login
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category,
            number: this.state.number,
            pin: this.state.pin,
            image: this.state.imagePreviewUrl
            })
            .then(this.state.toggle(false))
            //then refresh the gift card container, passing it the user id
            .then(this.forceUpdate())
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

        console.log("Current ID", this.state._id)

        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title><strong>Add a Gift Card</strong></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form action='.' encType="multipart/form-data">
                        {/* <FormGroup controlId="formBasicText" validationState={this.getValidationState()}> */}
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
                </Modal.Body>

            </Modal.Dialog>
        );
    }
}

export default GiftCardForm;
