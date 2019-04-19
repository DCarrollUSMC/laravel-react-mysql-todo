/**
 * Primary React Component for Todo Application
 * 
 * @author: Daniel Carroll
 */

import React, { Component } from 'react';

import TaskForm from './TaskForm';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <TaskForm />
            </div>
        );
    }
}