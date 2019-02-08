import React from 'react';
import { Link } from 'react-router-dom';
import {
    Logo,
    Button
} from '../styles';

const Note = props => {
    return (
        <div className='notes-container'>
            <Logo>{props.note.title}</Logo>
            <p>{props.note.textBody}</p>
            <Link to={`/note/${props.note._id}/update`}>
                <Button>Edit Note</Button>
            </Link>
                <Button onClick={props.handleDelete}>Delete</Button>
        </div>
    )
}

export default Note;