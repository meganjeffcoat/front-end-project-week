import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchNote, deleteNote} from '../actions';
import Note from '../components/Note';

const URL = 'https://fe-notes.herokuapp.com';

class NoteView extends Component {
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.noteId)
    }

    handleDelete = e => {
        this.props.deleteNote();
        axios
            .delete(`${URL}/note/delete/${this.props.match.params.noteId}`)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        if (!this.props.note.title) {
            return setTimeout(() => {
                return ( <h1>Loading Note...</h1>)
            }, 1000)
        }
        else if (this.props.error) {
            return (<h1>There was an error loading this note</h1>)
        } else {
        
        return (
            <Note note={this.props.note} handleDelete={this.handleDelete} />
        )
        }
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNote: id => dispatch(fetchNote(id)),
        deleteNote: () => dispatch(deleteNote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);