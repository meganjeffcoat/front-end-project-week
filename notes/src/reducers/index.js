import {
    FETCH_NOTES,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAIL,
    FETCH_NOTE,
    FETCH_NOTE_SUCCESS,
    FETCH_NOTE_FAIL,
    CREATE_NOTE,
    UPDATING_NOTE
} from '../actions';


const initialState = {
    notes: [],
    note: {},
    fetchingNotes: false,
    fetchingNote: false,
    creatingNote: false,
    updatingNote: false,
    noteId: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                fetchingNotes: true,
                creatingNote: false
            }
        case FETCH_NOTES_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                creatingNote: false,
                notes: action.payload,
                error: null
            }
        case FETCH_NOTES_FAIL:
            return {
                ...state,
                creatingNote: false,
                error: action.payload
            }
        case FETCH_NOTE:
            return{
                ...state,
                fetchingNote: true,
                creatingNote: false,
                updatingNote: false
            }
        case FETCH_NOTE_SUCCESS:
            return {
                ...state,
                fetchingNote: false,
                creatingNote: false,
                updatingNote: false,
                note: action.payload,
                error: null
            }
        case FETCH_NOTE_FAIL:
            return {
                ...state,
                creatingNote: false,
                error: action.payload
            }
        case CREATE_NOTE:
            return {
                ...state,
                creatingNote: true
            }
        case UPDATING_NOTE:
            return {
                ...state,
                updatingNote: true,
                error: null
            }

        default:
            return state
    }
}

export default reducer;