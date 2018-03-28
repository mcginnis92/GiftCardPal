import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./GiftCardModal.css";

const GiftCardModal = props => (
    <div>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Gift Card Number: {props.number}</p>
                <p>PIN: {props.pin}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.toggle}>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
    
        </Modal.Dialog>
    </div>
);


export default GiftCardModal;