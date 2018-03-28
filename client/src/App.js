import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from 'react-bootstrap';
import './App.css';

//Components
// import TopMenu from './components/TopMenu';
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import GiftCardForm from './pages/GiftCardForm';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Grid fluid>
              <Header/>
                <Route exact path="/" component={Splash} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route path="/giftcard" component={GiftCardForm} />
            <Footer/>
          </Grid>
        </Switch>
      </Router>
    );
  }
}

export default App;
