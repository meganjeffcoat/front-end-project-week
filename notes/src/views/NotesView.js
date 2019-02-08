import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';
import { fetchNotes } from '../actions';

class NotesView extends Component {
    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            <Notes notes={this.props.notes} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(NotesView);