/**
 * React Component Form to Create Tasks
 * 
 * @author: Daniel Carroll
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import axios from 'axios';

// Include redux action for addTask
function mapDispatchToProps(dispatch) {
    return {
        addTask: tasks => dispatch(addTask(tasks))
    };
}

class TaskForm extends Component {

    // Set initial state and bind functions
    constructor(props) {
        super(props);
        this.state = {
            taskInput: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    /**
     * Input form handler method
     * 
     * @param {object} e 
     */
    handleChange(e) {
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
        e.preventDefault();
        try {
            const response = await axios.post('/tasks', {
                title: this.state.taskInput
            })
            const { id, title } = response.data;
            const task = {
                id: id,
                title: title
            }
            // Add task to redux state
            this.props.addTask(task);

            // Reset taskInput in local state to clear form
            this.setState({ taskInput: '' });
        }
        catch(e) {
            // TODO: Display error message to user
            this.setState({ error: e.message });
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

export default connect(null, mapDispatchToProps)(TaskForm);