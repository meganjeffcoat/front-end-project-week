import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../actions';
import Note from '../components/Note';

class NoteView extends Component {
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.noteId)
    }
    render() {
        return (
            <Note />
        )
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