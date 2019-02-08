import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAIL = 'FETCH_NOTES_FAIL';
export const FETCH_NOTE = 'FETCH_NOTE';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const FETCH_NOTE_FAIL = 'FETCH_NOTE_FAIL';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

const URL = 'https://fe-notes.herokuapp.com';

export const fetchNotes = () => dispatch => {
    dispatch({
        type: FETCH_NOTES
    })
    axios
        .get(`${URL}/note/get/all`)
        .then(res => {
            return dispatch ({
                type: FETCH_NOTES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: FETCH_NOTES_FAIL,
                payload: err
            })
        })
}

export const fetchNote = id => dispatch => {
    dispatch({ 
        type: FETCH_NOTE 
    })
    axios
        .get(`${URL}/note/get/${id}`)
        .then(res => {
            return dispatch ({
                type: FETCH_NOTE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: FETCH_NOTE_FAIL,
                payload: err
            })
        })
}

export const createNote = () => dispatch => {
    dispatch({
        type: CREATE_NOTE
    })
}

export const updateNote = () => dispatch => {
    dispatch({
        type: UPDATING_NOTE
    })
}

export const deleteNote = () => dispatch => {
    dispatch({
        type: DELETE_NOTE
    })
}