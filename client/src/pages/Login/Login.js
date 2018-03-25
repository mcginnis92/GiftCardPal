import React, {Component} from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, Button } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import "./Login.css";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("state: ", this.state);
    };
    
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log("form submitted", this.state);
            
    //     API.saveCard({
    //         name: this.state.title,
    //         amount: this.state.amount,
    //         category: this.state.category
    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // };
    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <form>
                        <h3>Create an Account</h3>
                        {/* <FormGroup controlId="formBasicText" validationState={this.getValidationState()}> */}
                        <FormGroup>
                            <ControlLabel>Enter your username.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.email} 
                                name="email" 
                                placeholder="YourName@YourEmail.com" 
                                onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Enter your password.</ControlLabel>
                                <FormControl 
                                    type="password" 
                                    value={this.state.password} 
                                    name="password" 
                                    placeholder="password" 
                                    onChange={this.handleInputChange} />
                        </FormGroup>

                        <Button type="submit" block>Submit</Button>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default Login;