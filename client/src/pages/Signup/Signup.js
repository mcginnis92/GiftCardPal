import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import API from '../../utils/API';
import "./Signup.css";

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        name: ''
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
            .then(window.location = '/home')
            .catch(err => console.log(err))
    };
    
    render() {
        return (
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
        );
    }
}

export default Signup;
