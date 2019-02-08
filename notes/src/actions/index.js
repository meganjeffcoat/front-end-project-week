import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAIL = 'FETCH_NOTES_FAIL';

const URL = 'https://fe-notes.herokuapp.com';

export const fetchNotes = () => dispatch => {
    dispatch({
        type: FETCH_NOTES
    })
    axios
        .get(`${URL}/note/get/all`)
        .then(data => {
            return dispatch ({
                type: FETCH_NOTES_SUCCESS,
                payload: data.data
            })
        })
        .catch(err => {
            return dispatch({
                type: FETCH_NOTES_FAIL,
                payload: err
            })
        })
}