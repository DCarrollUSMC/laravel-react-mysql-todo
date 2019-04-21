/**
 * React Component to list Tasks
 * 
 * @author: Daniel Carroll
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTasks, deleteTask } from '../actions';
import axios from 'axios';

/**
 * mapStateToProps to give access to redux store
 * 
 * @param {object} state
 * @returns {object} tasks
 */
function mapStateToProps(state) {
    const { tasks } = state;
    return {
        tasks: tasks
    }
}

/**
 * mapDispatchToProps to update redux state with actions
 */
function mapDispatchToProps(dispatch) {
    return {
        setTasks: tasks => dispatch(setTasks(tasks)),
        deleteTask: id => dispatch(deleteTask(id))
    };
}

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.deleteTask = this.deleteTask.bind(this);
    }

    /**
     * When task list component has mounted, make
     * axios HTTP request to Laravel to retrieve 
     * tasks from DB.
     */
    async componentDidMount() {
        const response = await axios.get('/tasks');
        this.props.setTasks(response.data.tasks);
    }

    /**
     * Method to delete task from redux and DB
     * 
     * @param {integer} id 
     */
    async deleteTask(id) {
        this.props.deleteTask(id);
        try {
            axios.delete(`/tasks/${id}`);
        }
        catch(e) {
            console.log(e)
        }
    }

    render() {
        const { tasks } = this.props.tasks
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul className='list-group'>
                            <div className="card-header">Task List</div>
                            {tasks.length === 0 && <li className='list-group-item'>No Tasks! Try creating one below.</li>}
                            {tasks.map(task => {
                                return (
                                    <li key={task.id} className='list-group-item'>
                                        <div className='btn-group float-right'>
                                            <Link className="btn btn-warning" to={`/${task.id}/edit`}>Edit</Link>
                                            <button type='button' className='btn btn-success' onClick={() => this.deleteTask(task.id)}>Done</button>
                                        </div>
                                        <p>{task.title}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);