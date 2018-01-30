import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Characters from './Components/Characters';

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/Characters" component={Characters} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}