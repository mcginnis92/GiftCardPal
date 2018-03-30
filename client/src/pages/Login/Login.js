import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import "./Login.css";
import API from '../../utils/API';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
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
            
        API.loginUser({
            username: this.state.username,
            password: this.state.password
            })
            .then(res => console.log(res.data.fullname))
            .catch(err => console.log(err));
    };
    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <form>
                        <h3>Welcome Back! Please Log In.</h3>
                        {/* <FormGroup controlId="formBasicText" validationState={this.getValidationState()}> */}
                        <FormGroup>
                            <ControlLabel>Enter your username.</ControlLabel>
                            <FormControl 
                                type="text" 
                                value={this.state.username} 
                                name="username" 
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

                        <Button type="submit" block onClick={this.handleFormSubmit}>Submit</Button>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default Login;