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

        console.log(this.state.isLoggedIn)

        return this.state.isLoggedIn ?
            <Home isLoggedIn={this.state.isLoggedIn} name={this.state.fullname} userID={this.state._id}/> 
        :
            <Row>
                
               
                <Col xs={12}>
                    <form>
                        <h3>Create an Account</h3>
                        {/* <FormGroup controlId="formBasicText" validationState={this.getValidationState()}> */}
                        <FormGroup>
                            <ControlLabel>Enter your full name.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.fullname} 
                                name="fullname" 
                                placeholder="John Smith" 
                                onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Enter your email address. This will be your username.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.username} 
                                name="username" 
                                placeholder="YourName@YourEmail.com" 
                                onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Enter a password with at least 5 characters.</ControlLabel>
                                <FormControl 
                                    type="password" 
                                    value={this.state.password} 
                                    name="password" 
                                    placeholder="password" 
                                    onChange={this.handleInputChange} />
                        </FormGroup>

                        <Button onClick={this.handleFormSubmit} block>Submit</Button>
                    </form>
                </Col>
            </Row>
    }
}

export default Signup;
