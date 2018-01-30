import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Layout from './HeroLayout';

class Characters extends Component{
    render() {
        return(
            <Layout small title='Characters' subheading='Select Your Fighter' noBtn bgColor='orange'/>
        )
    }
}

export default withRouter(Characters);