import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from '../../pages/Home';
import API from '../../utils/API';
import "./Signup.css";

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        fullname: '',
        _id: '',
        isLoggedIn: false
    };

    nameValidationState = () => {
        const fullname = this.state.fullname;
        const letters = /^[A-Za-z]+$/;

        if (fullname.match(letters)) return 'success';
        else if (fullname.length == 0) return null;
        else return 'error';
        return null;
    }

    passwordValidationState = () => {
        const length = this.state.password.length;
        if (length >= 5) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    emailValidationState = () => {
        const email = this.state.username;
        
        if (this.validateEmail(email)) return 'success';
        else if (email.length == 0) return null;
        else return 'error';
        return null;
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();        
        console.log("form submitted", this.state);
            
        API.saveUser({
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname
            })
            .then(res => this.setState({isLoggedIn : true, fullname: res.data.fullname, _id: res.data._id}))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))
    };
    
    render() {

        return this.state.isLoggedIn ?
            <Home isLoggedIn={this.state.isLoggedIn} name={this.state.fullname} userID={this.state._id}/> 
        :
            <Row>
                <Col xs={12}>
                    <form>
                        <h3>Create an Account</h3>

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

                        <Button onClick={this.handleFormSubmit} block>Submit</Button>
                    </form>
                </Col>
            </Row>
    }
}

export default Signup;
