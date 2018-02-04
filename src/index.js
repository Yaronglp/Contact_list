import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import './css/main.css';

window.ReactDOM = ReactDOM;
window.React = React;

render(
    <App/>,
    document.getElementById('react-container')
);
