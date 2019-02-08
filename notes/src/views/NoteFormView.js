import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from '../components/NoteForm';
import { createNote } from '../actions';

class NoteFormView extends Component {
    render() {
        return <NoteForm />
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        createNote: newNote => dispatch(createNote(newNote))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormView);