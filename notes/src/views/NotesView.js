import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';
import { fetchNotes } from '../actions';

class NotesView extends Component {
    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        if (this.props.notes.length === 0) {
            return setTimeout(() => {
                return <h1>Loading Notes...</h1>
            }, 1000)
        }
        return (
            <Notes notes={this.props.notes} history={this.props.history} />
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