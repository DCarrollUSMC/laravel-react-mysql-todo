/**
 * React Component Form to Create Tasks
 * 
 * @author: Daniel Carroll
 */

import React, { Component } from 'react';
import axios from 'axios';

export default class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskInput: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Input form handler method
     * 
     * @param {string} e 
     */
    handleChange(e) {
        console.log(e);
        this.setState({
            taskInput: e.target.value
        });
    }

    /**
     * Async Axios HTTP POST method to create a Task
     * 
     * @param {object} e 
     */
    async createTask(e) {
        console.log(e);
        e.preventDefault();
        try {
            const response = await axios.post('/tasks', {
                taskInput: this.state.taskInput
            })
            //TODO: Add Redux and store response

            // Reset taskInput in local state
            this.setState({ taskInput: '' });
        }
        catch(e) {
            this.setState({ error: e });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Task</div>
                            <div className="card-body">
                                <form onSubmit={this.createTask}>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.taskInput}
                                            name="task-input"
                                            rows="5"
                                            placeholder="Create a task"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}