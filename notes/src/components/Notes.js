import React from 'react';
import { Link } from 'react-router-dom';
import {
    Logo,
    NotesContainer,
    NoteTab,
    NoteTabTitle
} from '../styles';

const Notes = props => {
    return (
        <div className='notes-container'>
            <Logo>Notes</Logo>
            <NotesContainer>
                {props.notes.map((n, i) => {
                    return(
                        <NoteTab key={i}>
                            <NoteTabTitle>
                                {n.title}
                            </NoteTabTitle>
                        </NoteTab>
                    )
                })}
            </NotesContainer>
        </div>
    )
}

export default Notes;