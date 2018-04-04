import React from "react";
import { Grid, Row } from 'react-bootstrap';
import "./Home.css";
import GiftCardContainer from '../../components/GiftCardContainer';
import New from '../../components/New';
import TopMenu from '../../components/TopMenu';
 
class Home extends React.Component {
    state = {
        name: this.props.name,
        userID: this.props.userID,
        isLoggedIn: this.props.isLoggedIn
    }
    
    render(){
        return (
            <Grid>
                <TopMenu />
                <GiftCardContainer _id={this.state.userID}/>
                <New _id={this.state.userID}/>
            </Grid> 
        )
    }
}

export default Home;