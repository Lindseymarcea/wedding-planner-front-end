import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { cuisine, guestlist, taskList } from 'react';
// import TaskList Page from './pages/taskListPage';
import Cuisine from './pages/cuisinePage';
import HomePage from './pages/homePage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// class App extends cuisine {
//   render() {
//     return (
//       <div>
//         <nav className='navbar navbar-expand navbar-dark bg-dark'>
//           <a href='/cuisine/' className='navbar-brand'>
//             bezKoder
//           </a>
//           <div className='navbar-nav mr-auto'>
//             <li className='nav-item'>
//               <Link to={'/cuisine/'} className='nav-link'>
//                 Tutorials
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to={'/add'} className='nav-link'>
//                 Add
//               </Link>
//             </li>
//           </div>
//         </nav>

//         <div className='container mt-3'>
//           <Switch>
//             <Route exact path={['/', '/cuisine/']} component={cuisine} />
//             <Route exact path='/taskList/' component={taskList} />
//             <Route path='/guestlist/' component={guestlist} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route index element={<HomePage />} />
//       <Route path='taskListPage' element={<TaskListPage />} />
//     </Route>
//   )
// );
export default class App extends React.Component {
  // function App() {
  render() {
    return (
      <>
        <header className='App-header'>
          <nav>
            <h1> A & J</h1>
            <navLink to='/'>Home</navLink>
            <h2> Our Wedding Story </h2>
            <h3> Aaliyah & James</h3>
            <navLink to='RSVP'>RSVP</navLink>
            <button>RSVP</button>
            {/* <Link to='/cuisine'>Cuisine Selection</Link> */}
            <button>Gift Registry</button>
            <button>Playlist</button>
            <button>To Do</button>
            <button>Vision Board</button>
            <button>Upload Photos</button>
          </nav>
        </header>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='cuisine' element={<Cuisine />} />
          </Routes>
          <Link to='/cuisine'>Cuisine Selection</Link>
        </Router>
      </>
    );
  }
}

// export default App;

// line 5 edited & 15-49

// import {
//     createBrowserRouter,
//     Route,
//     createRoutesFromElements,
//     RouterProvider,
//     Link,
//     Switch
// } from 'react-router-dom';
// add and take away some of these

{
  /* <RouterProvider router={Router} /> */
}
