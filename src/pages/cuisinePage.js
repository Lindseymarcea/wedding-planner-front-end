import axios from 'axios';
import React from 'react';

export default class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cuisine: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Component did Mount');
    axios.get('http://127.0.0.1:8000/registry/cuisine/').then((res) => {
      console.log(res);
      this.setState({ cuisine: res.data });
    });
  }

  handleChange(event) {
    this.setState({ cuisine: event.target.cuisine });
  }

  handleSubmit(event) {
    alert('Cuisine Selection Submitted: ' + this.state.cuisine);
    event.preventDefault();
  }
  render() {
    const { cuisine } = this.state;
    console.log(cuisine);
    console.log(this.state);
    return (
      // <>
      //   <p>Choose your Cuisine Selection:</p>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Name:
      //       <input
      //       type='text'
      //       cuisine={this.state.cuisine}
      //       onChange={this.handleChange}
      //       />
      <ul>
        {cuisine.map((item, i) => (
          <li key={i}>
            {item.title} - {item.allergens}
          </li>
        ))}
      </ul>
    );
  }
}

// if statement that says if their is an allergen- show title
// changed line 53 from {this.state.cuisine.map((cuisines) => ( to cuisine.map(cuisines => ()) then uncommented line 40
// line 7, 22, 26, 39 changing value to cuisine, next line closing tag
// line 47- closing label, 48- closing form
/* </label>
            <label>
              <select value={item.title.id} onChange={this.handleChange}>
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
        </main>
      </>
//     );
//   }
// } */

/* // lines 30,& 43-49 */
