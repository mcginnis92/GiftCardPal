import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock, Alert } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from '../../pages/Home';
import API from '../../utils/API';
import "./Signup.css";

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        confirmedPassword: '',
        fullname: '',
        _id: '',
        isLoggedIn: false,
        showAlert: false
    };

    /**
     * @function handleAlert triggers an alert if the login credentials supplied are incorrect
     * @returns an alert
     */
    handleAlert = () => {
        this.setState({ showAlert: true });
    }

    /**
     * @function nameValidationState checks if the inputted name contains only letters
     * @param { string } this.state.fullname
     * @returns success or error feedback to the user
     */
    nameValidationState = () => {
        const fullname = this.state.fullname;
        const letters = /^[A-Za-z]+$/;

        if (fullname.match(letters)) return 'success';
        else if (fullname.length == 0) return null;
        else return 'error';
        return null;
    }

    /**
     * @function passwordValidationState checks if the inputted password is at least 5 characters
     * @param { string } this.state.password.length
     * @returns success or error feedback to the user
     */
    passwordValidationState = () => {
        const length = this.state.password.length;
        if (length >= 5) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    /**
     * @function confirmPassword checks if the 2 passwords match
     * @param { string } this.state.confirmedPassword
     * @returns success or error feedback to the user
     */
    confirmPassword = () => {
        const confirmedPassword = this.state.confirmedPassword;
        if (confirmedPassword.length === 0) return null;
        else if (confirmedPassword !== this.state.password) return 'warning';
        else if (confirmedPassword === this.state.password) return 'success';
        return null;  
    }

    /**
     * @function validateEmail checks if the input matches the format of an email address
     * @param { string } email
     * @returns a boolean
     */
    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    /**
     * @function emailValidationState runs the validateEmail function
     * @param { string } this.state.username
     * @returns success or error feedback to the user
     */
    emailValidationState = () => {
        const email = this.state.username;
        
        if (this.validateEmail(email)) return 'success';
        else if (email.length == 0) return null;
        else return 'error';
        return null;
    }

    /**
     * @function handleInputChange saves input value to the state as they are modified
     * @param event input change
     * @returns updated state
     */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    /**
     * @function handleFormSubmit sends a post request with the user's sign up information
     * @param event form submission
     * @returns the logged in (new) user
     */
    handleFormSubmit = event => {
        event.preventDefault();        
            
        API.saveUser({
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname
            })
            .then(res => this.setState({isLoggedIn : true, fullname: res.data.fullname, _id: res.data._id}))
            .catch(err => this.handleAlert())
    };
    
    render() {

        return this.state.isLoggedIn ?
            <Home isLoggedIn={this.state.isLoggedIn} name={this.state.fullname} userID={this.state._id}/> 
        :
            <Row>
                <Col xs={12} md={6} mdOffset={3}>
                    <form>
                        <h3>Create an Account</h3>

                        { this.state.showAlert ? <Alert bsStyle="info"><strong>Please check that your supplied credentials meet the requirements before signing up.</strong></Alert> : null }

                        <FormGroup validationState={this.nameValidationState()}>
                            <ControlLabel>Enter your name.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.fullname} 
                                name="fullname" 
                                placeholder="John Smith" 
                                onChange={this.handleInputChange} />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup validationState={this.emailValidationState()}>
                            <ControlLabel>Enter your email address. This will be your username.</ControlLabel>
                            <FormControl 
                                type="email" 
                                value={this.state.username} 
                                name="username" 
                                placeholder="YourName@YourEmail.com" 
                                onChange={this.handleInputChange} />
                            <FormControl.Feedback />
                            
                        </FormGroup>

                        <FormGroup validationState={this.passwordValidationState()}>
                            <ControlLabel>Enter a password with at least 5 characters.</ControlLabel>
                                <FormControl 
                                    type="password" 
                                    value={this.state.password} 
                                    name="password" 
                                    placeholder="password" 
                                    onChange={this.handleInputChange} />
                                <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup validationState={this.confirmPassword()}>
                        <ControlLabel>Confirm password</ControlLabel>
                                <FormControl 
                                    type="password" 
                                    value={this.state.confirmedPassword}
                                    name="confirmedPassword" 
                                    placeholder="password" 
                                    onChange={this.handleInputChange} />
                                <FormControl.Feedback />
                        </FormGroup>

                        <Button onClick={this.handleFormSubmit} block>Submit</Button>
                    </form>
                </Col>
            </Row>
    }
}

export default Signup;
