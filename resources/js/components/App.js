/**
 * Primary React Component for Todo Application
 * 
 * @author: Daniel Carroll
 */

import React, { Component } from 'react';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <TaskList />
                <TaskForm />
            </div>
        );
    }
}