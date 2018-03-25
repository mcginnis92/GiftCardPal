import React, {Component} from "react";
import { Grid } from 'react-bootstrap';
import "./Home.css";
import GiftCardContainer from '../../components/GiftCardContainer';
import New from '../../components/New';

const Home = props => (
    <Grid>
        <GiftCardContainer/>
        <New/>
    </Grid>    
);

export default Home;