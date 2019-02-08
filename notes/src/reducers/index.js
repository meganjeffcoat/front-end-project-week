import {
    FETCH_NOTES,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAIL
} from '../actions';


const initialState = {
    notes: [],
    fetchingNotes: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        case FETCH_NOTES_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload,
                error: null
            }
        case FETCH_NOTES_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default reducer;