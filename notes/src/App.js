import React, { Component, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import NoteFormView from './views/NoteFormView';
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/new-note'>Add Note</NavLink>
        </nav>
        <div className='app-container'>
          <Route path='/new-note' component={NoteFormView} />
          <Route exact path='/' component={NotesView} />
          <Route path='/note/:noteId' component={NoteView} />
        </div>
      </>
    );
  }
}

export default App;
