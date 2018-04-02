import React from "react";
import { Grid } from 'react-bootstrap';
import "./Home.css";
import GiftCardContainer from '../../components/GiftCardContainer';
import New from '../../components/New';
import TopMenu from '../../components/TopMenu';

class Home extends React.Component {
    state = {
        name: this.props.name,
        userID: this.props._id,
        isLoggedIn: this.props.isLoggedIn
    }
    
    render(){
        return (
            <Grid>
                <TopMenu name={this.state.name}/>
                <GiftCardContainer/>
                <New/>
            </Grid> 
        )
    }
}



// const Home = props => {
 
//     <Grid>
//         <TopMenu />
//         <GiftCardContainer/>
//         <New/>
//     </Grid>    
  
// };

export default Home;