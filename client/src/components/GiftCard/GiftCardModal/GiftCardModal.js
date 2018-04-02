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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    updateAmount = event => {
        event.preventDefault();

        let newTotal = this.state.amount - this.state.spent;

        API.updateCard(this.state.id, {amount: newTotal})
        .then(this.state.toggle)
        .catch(err => console.log(err));
    }

    removeCard = event => {
        API.deleteCard(this.state.id)
        .then(this.state.toggle)
        .catch(err => console.log(err));
    }

    render() {

        //Option 1
        // var arrayBufferView = new Uint8Array(this.state.image.data);
        // var blob = new Blob( [ arrayBufferView ], { type: "image/png" } );
        // var urlCreator = window.URL || window.webkitURL;
        // var imageUrl = urlCreator.createObjectURL( blob );
        // //method A: drop the url into the image src
        // // var img = document.querySelector( "#photo" );
        // // img.src = imageUrl;

        // //method B: dynamically create
        // // console.log(imageUrl, "image url");
        // const imagePreview = (<img src={imageUrl} alt="gift card"/>);
        //---------------------------------------------------------------//

        // Option 2
        // const blob = new Blob([this.state.image.data], {type: "image.png"});

        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.state.toggle}>
                        <Modal.Title><strong>{this.state.name}</strong></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Gift Card Number: {this.state.number}</p>
                        <p>PIN: {this.state.pin}</p>

                        {/* //METHOD 1 */}
                        {/* <img id="photo" src={imagePreview} alt="preview"/> */}

                        {/* //METHOD 2
                        {<div className="imgPreview">{blob}</div> */}

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

// componentDidMount = () => {
    //     let imagePreview = null;

    //     var arrayBufferView = new Uint8Array(this.state.image);
    //     var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    //     var urlCreator = window.URL || window.webkitURL;
    //     var imageUrl = urlCreator.createObjectURL( blob );
    //     console.log(imageUrl, "image url");

    //     imagePreview = (<img src={imageUrl} alt="gift card image"/>);
    // }