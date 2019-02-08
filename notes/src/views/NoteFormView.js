import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import NoteForm from '../components/NoteForm';
import { createNote } from '../actions';

class NoteFormView extends Component {
    handleCreate = newNote => {
        this.props.createNote();

        axios
        .post(`${URL}/note/create`, newNote)
        .then(res => {
            this.props.history.push(`/note/${res.data.success}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleUpdate = note => {
        axios
        .put(`${URL}/note/edit/${this.props.match.params.noteId}`, note)
        .then(res => {
            this.props.history.push(`/note/${res.data._id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return <NoteForm 
                    createNote={this.props.createNote}
                    handleCreate={this.handleCreate}
                    noteId={this.props.noteId}
                    history={this.props.history}
                    update={this.props.update}
                    handleUpdate={this.handleUpdate}
                    note={this.props.note}
                />
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