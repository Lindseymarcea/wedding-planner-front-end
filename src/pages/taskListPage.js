// import React from 'react';

// export class taskList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       value: '',
//       editing: false,
//       currentid: '',
//       currentValue: '',
//     };
//   }
//   onChange = (e) => {
//     this.setState({ value: e.target.value });
//   };
//   onAddTask = (e) => {
//     e.preventDefault();

//     const obj = {
//       name: this.state.value,
//       id: Date.now(),
//     };
//     if (this.state.value !== '') {
//       this.setState({ todos: this.state.todos.concat(obj) });
//       this.setState({ value: '' });
//     }
//   };

//   onDeleteTask = (itemId) => {
//     this.setState({
//       todos: [...this.state.todos].filter((id) => id.id !== itemId),
//     });
//   };

//   onEditTodo = (id, newValue) => {
//     this.state.todos.map((todo) => {
//       if (todo.id === id) {
//         todo.name = newValue;
//       }
//     });
//   };

//   onSubmitEditTodo = (e) => {
//     e.preventDefault();

//     this.onEditTodo(this.state.currentid, this.state.currentValue);
//     this.setState({ editing: false });
//   };

//   onToggleEdit = (todo) => {
//     this.setState({ editing: true });
//     this.setState({ currentid: todo.id });
//     this.setState({ currentValue: todo.name });
//   };

//   onEditInputChange = (e) => {
//     this.setState({ currentValue: e.target.value });
//   };

//   render() {
//     const mylist = this.state.todos.map((todo) => (
//       <li className='todo_item'>
//         {todo.name}

//         <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
//         <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
//       </li>
//     ));

//     return (
//       <>
//         <div className='App'>
//           {this.state.editing === false ? (
//             <form onSubmit={this.onAddTask}>
//               <input
//                 placeholder='typeyour task'
//                 value={this.state.value}
//                 onChange={this.onChange}
//               />
//               <button onClick={this.onAddTask}>Add Item</button>
//             </form>
//           ) : (
//             <form onSubmit={this.onSubmitEditTodo}>
//               <input
//                 placeholder='edit your task'
//                 value={this.state.currentValue}
//                 name={this.state.currentValue}
//                 onChange={this.onEditInputChange}
//               />
//               <button onClick={this.onSubmitEditTodo}>Update Item</button>
//             </form>
//           )}

//           <ul className='todo_wrapper'>{mylist}</ul>
//         </div>
//       </>
//     );
//   }

// export default class TaskList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: false,
//       taskList: [],
//       // modal: false,
//       activeItem: {
//         title: '',
//         description: '',
//         completed: false,
//       },
//     };
//   }

//   componentDidMount() {
//     this.refreshList();
//   }

//   refreshList = () => {
//     axios
//       .get('/api/to_do/')
//       .then((res) => this.setState({ todoList: res.data }))
//       .catch((err) => console.log(err));
//   };

//   // toggle = () => {
//   //   this.setState({ modal: !this.state.modal });
//   // };

//   handleSubmit = (item) => {
//     this.toggle();

//     if (item.id) {
//       axios
//         .put(`/api/to_do/${item.id}/`, item)
//         .then((res) => this.refreshList());
//       return;
//     }
//     axios.post('/api/to_do/', item).then((res) => this.refreshList());
//   };

//   handleDelete = (item) => {
//     axios.delete(`/api/to_do/${item.id}/`).then((res) => this.refreshList());
//   };

//   createItem = () => {
//     const item = { title: '', description: '', completed: false };

//     this.setState({ activeItem: item });
//   };

//   editItem = (item) => {
//     this.setState({ activeItem: item });
//   };

//   displayCompleted = (status) => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }

//     return this.setState({ viewCompleted: false });
//   };

//   renderTabList = () => {
//     return (
//       <div className='nav nav-tabs'>
//         <span
//           onClick={() => this.displayCompleted(true)}
//           className={this.state.viewCompleted ? 'nav-link active' : 'nav-link'}
//         >
//           Complete
//         </span>
//         <span
//           onClick={() => this.displayCompleted(false)}
//           className={this.state.viewCompleted ? 'nav-link' : 'nav-link active'}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };

//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.taskList.filter(
//       (item) => item.completed === viewCompleted
//     );

//     return newItems.map((item) => (
//       <li
//         key={item.id}
//         className='list-group-item d-flex justify-content-between align-items-center'
//       >
//         <span
//           className={`todo-title mr-2 ${
//             this.state.viewCompleted ? 'completed-todo' : ''
//           }`}
//           title={item.description}
//         >
//           {item.title}
//         </span>
//         <span>
//           <button
//             className='btn btn-secondary mr-2'
//             onClick={() => this.editItem(item)}
//           >
//             Edit
//           </button>
//           <button
//             className='btn btn-danger'
//             onClick={() => this.handleDelete(item)}
//           >
//             Delete
//           </button>
//         </span>
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <main className='container'>
//         <h1 className='text-white text-uppercase text-center my-4'>Todo app</h1>
//         <div className='row'>
//           <div className='col-md-6 col-sm-10 mx-auto p-0'>
//             <div className='card p-3'>
//               <div className='mb-4'>
//                 <button className='btn btn-primary' onClick={this.createItem}>
//                   Add task
//                 </button>
//               </div>
//               {this.renderTabList()}
//               <ul className='list-group list-group-flush border-top-0'>
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//         activeItem={this.state.activeItem}
//         toggle={this.toggle}
//         onSave={this.handleSubmit}
//       </main>
//     );
//   }
// }
