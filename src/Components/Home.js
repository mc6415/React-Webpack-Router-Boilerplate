import React, {Component} from 'react';
import { withRouter } from 'react-router';

class Home extends Component{
    render(){
        return(
            <h1>We here now!</h1>
        )
    }
}

export default withRouter(Home);