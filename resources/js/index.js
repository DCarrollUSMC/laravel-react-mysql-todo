/**
 * index.js is the entry-point for the react application
 * 
 * @author: Daniel Carroll
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
}