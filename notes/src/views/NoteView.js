import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../actions';
import Note from '../components/Note';

class NoteView extends Component {
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.noteId)
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
            <Note note={this.props.note} />
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
        fetchNote: id => dispatch(fetchNote(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);