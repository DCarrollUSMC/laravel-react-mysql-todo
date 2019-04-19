/**
 * index.js is the entry-point for the react application
 * 
 * @author: Daniel Carroll
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}