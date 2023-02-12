import React from 'react';
import axios from 'axios';

export default class Playlist extends React.Component {
  state = {
    playlist: [],
  };

  handleChange = (event) => {
    this.setState({ playlist: event.target.playlist });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      playlist: this.state.playlist,
    };

    axios
      .post('http://127.0.0.1:8000/registry/playlist/', { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type='text' name='name' onChange={this.handleChange} />
          </label>
        </form>
        <label>
          Musician:
          <input type='text' name='name' onChange={this.handleChange} />
        </label>
        <button type='submit'>Submit</button>
      </div>
    );
  }
}
