/**
 * index.js is the entry-point for the react application
 * 
 * @author: Daniel Carroll
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import TaskEdit from './components/TaskEdit';
import rootReducer from './reducers';

const store = createStore(rootReducer);

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/:id/edit' component={TaskEdit} exact={true} />
                    <App />
                </Switch>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));
}