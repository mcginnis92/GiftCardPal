import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from 'react-bootstrap';
import './App.css';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Splash from "./pages/Splash";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GiftCardForm from './pages/GiftCardForm';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Grid fluid>
              <Header/>
                <Route exact path="/" component={Splash} />
                <Route exact path="/home" component={Login} />
                <Route exact path="/signup" component={Signup} />
            <Footer/>
          </Grid>
        </Switch>
      </Router>
    );
  }
}

export default App;
