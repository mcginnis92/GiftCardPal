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

    // componentDidMount = () => {
    //     let imagePreview = null;

    //     var arrayBufferView = new Uint8Array(this.state.image);
    //     var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    //     var urlCreator = window.URL || window.webkitURL;
    //     var imageUrl = urlCreator.createObjectURL( blob );
    //     console.log(imageUrl, "image url");

    //     imagePreview = (<img src={imageUrl} alt="gift card image"/>);
    // }

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
        console.log(this.state.image, "this.state.image");

        var arrayBufferView = new Uint8Array(this.state.image.data);
        var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( blob );
        console.log(imageUrl, "image url");

        const imagePreview = (<img src={imageUrl} alt="gift card image"/>);

        // var dataView = new DataView(this.response);
        // var decoder = new TextDecoder(encoding);
        // var decodedString = decoder.decode(dataView);

        // const blob = new Blob([this.state.image.data], {type: "image.png"});
        // const imagePreview = (<img src={blob} alt="preview"/>);

        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.state.toggle}>
                        <Modal.Title><strong>{this.state.name}</strong></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Gift Card Number: {this.state.number}</p>
                        <p>PIN: {this.state.pin}</p>

                        <div className="imgPreview">{imagePreview}</div>

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