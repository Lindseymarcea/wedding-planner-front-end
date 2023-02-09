import React from 'react';

export default class Cuisine extends React.Component {
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
    alert('Cuisine Selection Submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Choose your Cuisine Selection:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value=''>
                Grilled Chicken & Asparagus with Mango Salsa
              </option>
              <option value='Fettucini Alfredo with peas & bread'>
                Fettucini Alfredo with peas & bread
              </option>
              <option value='Portobello Mushroom Wellington'>
                Portobello Mushroom Wellington
              </option>
              <option value='Salmon and Cheesy Risotto'>
                Salmon and Cheesy Risotto
              </option>
            </select>
          </label>
          <input type='submit' value='Submit' />
        </form>
        <h1>Cuisine Selection</h1>
      </>
    );
  }
}
