import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    handleChange(e) {
        this.setState({ taskInput: e.target.value });
    }

    async updateTask(e) {
        e.preventDefault();
        try {
            await axios.put(`/tasks/${this.props.match.params.id}`, {
                title: this.state.taskInput
            });
            this.props.history.push('/');
        }
        catch(e) {
            console.log(e);
        }
    }

    async getTask() {
        console.log(this.props.match.params.id)
        const response = await axios.get(`/tasks/${this.props.match.params.id}/edit`);
        console.log(response)
        this.setState({ taskInput: response.data.task.title });
    }

    componentDidMount() {
        this.getTask();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>
                            <div className="card-body">
                                <form onSubmit={this.updateTask}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.taskInput}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}