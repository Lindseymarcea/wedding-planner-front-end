import React from 'react';
import axios from 'axios';

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', musician: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({ playlist: event.target.playlist });
  };
  // add another handle change
  // set state for title and musician
  // do binding for sendond handle change function
  // update input tag- mapping to correct handle change

  handleSubmit(event) {
    alert('Playlist Selection Submitted: ');
    event.preventDefault();

    const user = {
      // guestlist: 'this.state.guestlist',
      title: this.state.title,
      musician: this.state.musician,
      // playlist: this.state.playlist,
    };

    axios
      .post('http://127.0.0.1:8000/registry/song_choice/', { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <p> Submit your playlist song here!</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type='text' name='title' onChange={this.handleChange} />
          </label>
          <label>
            Musician:
            <input type='text' name='musician' onChange={this.handleChange} />
          </label>
          <input type='submit' name='submit' />
          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    );
  }
}
