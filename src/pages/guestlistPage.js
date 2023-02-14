import React from 'react';
import axios from 'axios';

export default class Guestlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guestlist: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Component did Mount');
    axios.get('http://127.0.0.1:8000/registry/guestlist/').then((res) => {
      console.log(res);
      this.setState({ guestlist: res.data });
    });
  }

  handleChange(event) {
    this.setState({ guestlist: event.target.guestlist });
  }

  handleSubmit(event) {
    alert(
      ' We are so excited to have you celebrate with us!: ' +
        this.state.guestlist
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Name:
            <input type='text' name='name' onChange={this.handleChange} />
          </label>
        </form>
        <p> Will you be blessing us with your presence?</p>
        <input type='submit' value='Yes' />
        <input type='submit' value='No' />
        {/* <button type='submit'>Yes</button>
        <button type='submit'>No</button> */}
      </div>
    );
  }
}
