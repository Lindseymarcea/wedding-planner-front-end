// import React from 'react';
// import axios from 'axios';

// export default class TaskList extends React.Component {
//   state = {
//     task: [],
//     title: [],
//     description: [],
//   };

//   componentDidMount() {
//     axios.get(`http://127.0.0.1:8000/registry/to_do/`).then((res) => {
//       const task = res.data;
//       this.setState({ task });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.task.map((task) => (
//           <li key={task.id}>{task.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
