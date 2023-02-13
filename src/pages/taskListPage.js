import React from 'react';
import axios from 'axios';

export default class TaskList extends React.Component {
  state = {
    taskList: [],
  };

  handleChange = (event) => {
    this.setState({ taskList: event.target.taskList });
  };

  handleSubmit(event) {
    alert('Task Added: ' + this.state.taskList);
    event.preventDefault();

    const task = {
      taskList: this.state.taskList,
    };

    axios
      .post('http://127.0.0.1:8000/registry/to_do/', { task })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  componentDidMount() {
    console.log('Component did Mount');
    axios.get('http://127.0.0.1:8000/registry/to_do/').then((res) => {
      console.log(res);
      this.setState({ taskList: res.data });
    });
  }

  render() {
    const { taskList } = this.state;
    return (
      <div>
        <h1> Wedding To-Do's</h1>
        <ul>
          {taskList.map((item, i) => (
            <li key={i}>
              {item.title} - {item.description} - {item.completed}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
