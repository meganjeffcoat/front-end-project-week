import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    name='title'
                    placeholder='Note Title'
                    value={this.state.title}
                />
                <input 
                    type='text'
                    name='textBody'
                    placeholder='Type Your Note Here'
                    value={this.state.textBody}
                />
                <input 
                    type='submit'
                    value='Add Note'
                />
            </form>
        )
    }
}

export default NoteForm;