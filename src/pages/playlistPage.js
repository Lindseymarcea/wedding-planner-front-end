import React from 'react';

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Name Submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <h1>Do you have any Playlist Requests?</h1>
        <form onSubmit={this.handleSubmit}> </form>
        <label>
          Title:
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <form onSubmit={this.handleSubmit}> </form>
        <label>
          Artist:
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}
