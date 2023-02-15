import React from 'react';
import axios from 'axios';
import './taskList.css';

export default class TaskList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { title: '', description: '', completed: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  state = {
    taskList: [],
    task: {
      title: '',
      description: '',
      completed: false,
    },
  };

  // handleChange = (event) => {
  //   this.setState({ taskList: event.target.name });
  // };

  handleSubmit(event) {
    alert('Task Added: ' + this.state.taskList);
    event.preventDefault();

    // const taskList = {
    //   taskList: this.state.taskList,
    // };

    // const user = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   completed: this.state.completed,
    // };

    axios
      .post('http://127.0.0.1:8000/registry/to_do/', this.state.task)
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
      <>
        <div>
          <h1> Wedding To-Do's</h1>
          <ul>
            {taskList.map((item, i) => (
              <li key={i}>
                {item.title} : {item.description} {item.completed}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p> Submit your task here!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                type='text'
                name='title'
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    task: { ...this.state.task, title: event.target.name },
                  });
                }}
              />
            </label>
            <label>
              Description:
              <input
                type='text'
                name='description'
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    task: {
                      ...this.state.task,
                      description: event.target.name,
                    },
                  });
                }}
              />
            </label>
            <input type='submit' name='submit' />
          </form>
        </div>
      </>
    );
  }
}
