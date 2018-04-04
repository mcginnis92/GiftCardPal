import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Grid, Alert } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./Login.css";
import Home from '../../pages/Home';
import API from '../../utils/API';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        name: '',
        _id: '',
        isLoggedIn: false,
        showAlert: false
    };

    handleAlert = () => {
        this.setState({ showAlert: true });
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
     * @function handleFormSubmit sends a post request with the user's login information
     * @param event form submission
     * @returns the logged in user
     */
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state, "form submitted")
        API.loginUser({
            username: this.state.username,
            password: this.state.password
            })
            .then(res => res.data._id ? this.setState({name: res.data.fullname, _id: res.data._id, isLoggedIn: true}) :  this.handleAlert())
            .catch(err => console.log(err));
    };
    
    render() {
        return this.state.isLoggedIn ?
            <Home name={this.state.name} userID={this.state._id}/>
            : 
                <Row>
                    <Col xs={12} md={6} mdOffset={3}>
                        <form>
                            <h3>Welcome Back! Please Log In.</h3>
                            { this.state.showAlert ? <Alert bsStyle="info"><strong>Incorrect login. Try again!</strong></Alert> : null }
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
    }
}

export default Login;