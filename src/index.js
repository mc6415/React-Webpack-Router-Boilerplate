import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './Styles/style.scss';

ReactDOM.render(
    <Router/>,
    document.getElementById('app')
);

module.hot.accept();