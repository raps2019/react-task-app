import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTaskId = Date.now().toString();
    const newTask = this.state.task;

    const obj = {
      id: newTaskId,
      name: newTask,
    };

    this.setState({
      tasks: [...this.state.tasks, obj],
      task: '',
    });
  }

  handleDelete(e) {
    e.preventDefault();
    const targetId = e.target.parentNode.id;
    const taskList = this.state.tasks;
    const newTaskList = taskList.filter((task) => task.id !== targetId);
    this.setState({
      tasks: newTaskList,
    });
  }

  handleEdit(e) {
    e.preventDefault();
  }

  render() {
    // const {tasks} = this.state.tasks
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter a task"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit Task</button>
        <Overview
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </form>
    );
  }
}

export default App;
