import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/About" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}