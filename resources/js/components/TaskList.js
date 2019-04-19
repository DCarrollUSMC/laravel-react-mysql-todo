/**
 * React Component to List Tasks
 * 
 * @author: Daniel Carroll
 */

import React, { Component } from 'react';
import axios from 'axios';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    // TODO: Add Redux to manage tasks in state

    async componentDidMount() {
        const response = await axios.get('/tasks');
        this.setState({ tasks: response.data.tasks, ...this.state.tasks });
    }

    render() {
        console.log('this.state.tasks', this.state.tasks);
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul className='list-group'>
                            <div className="card-header">Task List</div>
                            {this.state.tasks.length === 0 && <li className='list-group-item'>No Tasks! Try creating one below.</li>}
                            {this.state.tasks.map(task => (
                                <li key={task.id} className='list-group-item'>
                                    {task.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}