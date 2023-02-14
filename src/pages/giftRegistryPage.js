import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class GiftRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { giftRegistry: [] };
  }

  componentDidMount() {
    console.log('Component did Mount');
    axios.get('http://127.0.0.1:8000/registry/gift/').then((res) => {
      console.log(res);
      this.setState({ giftRegistry: res.data });
    });
  }

  render() {
    const { giftRegistry } = this.state;
    return (
      <div>
        <h1> Please consider these registry items as gifts!</h1>
        <ul>
          {giftRegistry.map((item, i) => (
            <li key={i}>
              {item.title}
              <li>{item.description}</li>
              <li>{item.price}</li>
              <li>
                "{item.link}"<li>{item.bought}</li>
              </li>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
