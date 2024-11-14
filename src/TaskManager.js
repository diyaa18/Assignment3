import React, { Component } from 'react';
import TaskList from './TaskList';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  handleAddTask = () => {
    if (this.state.newTask.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: this.state.newTask
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        newTask: ''
      }));
    }
  };

  handleDeleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>

        <div className="add-task">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter new task"
          />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>

        <TaskList tasks={this.state.tasks} onDelete={this.handleDeleteTask} />
      </div>
    );
  }
}

export default TaskManager;
