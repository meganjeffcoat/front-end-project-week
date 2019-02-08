import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../actions';
import Note from '../components/Note';

class NoteView extends Component {
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);