import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { cuisine, guestlist, taskList } from 'react';
// import TaskList Page from './pages/taskListPage';
import Cuisine from './pages/cuisinePage';
import HomePage from './pages/homePage';
import GiftRegistry from './pages/giftRegistryPage';
// import Guestlist from './pages/guestlistPage';
// import Photo from './pages/photoPage';
import TaskList from './pages/taskListPage';
import VisionBoard from './pages/visionBoardPage';
import Playlist from './pages/playlistPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class App extends React.Component {
  // function App() {
  render() {
    return (
      <>
        <header className='App-header'>
          <h1> A & J</h1>
          {/* <navLink to='/'>Home</navLink> */}
          <h2> Our Wedding Story </h2>
          <h3> Aaliyah & James</h3>
          {/* <navLink to='RSVP'>RSVP</navLink> */}
          {/* <button>RSVP</button> */}
          {/* <Link to='/cuisine'>Cuisine Selection</Link> */}
          {/* <button>Gift Registry</button>
            <button>Playlist</button>
            <button>To Do</button>
            <button>Vision Board</button>
            <button>Upload Photos</button> */}
        </header>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/cuisine' element={<Cuisine />} />
            <Route exact path='/giftregistry' element={<GiftRegistry />} />
            {/* <Route exact path='/guestlist' element={<Guestlist />} /> */}
            {/* <Route exact path='/photo' element={<Photo />} /> */}
            <Route exact path='/playlist' element={<Playlist />} />
            <Route exact path='/tasklist' element={<TaskList />} />
            <Route exact path='/visionboard' element={<VisionBoard />} />
          </Routes>
          <Link to='/cuisine'>Cuisine Selection</Link>
          <Link to='/giftregistry'>Gift Registry</Link>
          <Link to='/guestlist'>RSVP</Link>
          <Link to='/photo'>Upload Memories</Link>
          <Link to='/playlist'>Playlist</Link>
          <Link to='/tasklist'>To Do</Link>
          <Link to='/visionboard'>Vision Board</Link>
        </Router>
      </>
    );
  }
}
