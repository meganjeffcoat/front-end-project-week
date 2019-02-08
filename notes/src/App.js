import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import NoteFormView from './views/NoteFormView';
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';
import './App.css';
import {
  AppContainer,
  Header,
  NavBar,
  Logo,
  NavText,
  ViewContainer
} from './styles';

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <NavBar>
            <Logo>Notes</Logo>
              <Link to='/'>
                <NavText>
                  <i class="fas fa-eye"></i>
                  View Notes
                </NavText>
              </Link>
            <Link to='/create-note'>
              <NavText>
                <i class="fas fa-pencil-alt"></i>
                Add Note
              </NavText>
            </Link>
          </NavBar>
        </Header>

        <AppContainer>
          <ViewContainer>
            <div className='app-container'>
              <Route path='/create-note' component={NoteFormView} />
              <Route exact path='/' component={NotesView} />
              <Route path='/note/:noteId' component={NoteView} />
              <Route update path='/note/:noteId/update' render={props => <NoteFormView {...props} update />} /> 
            </div>
          </ViewContainer>
        </AppContainer>
      </>
    );
  }
}

export default App;
