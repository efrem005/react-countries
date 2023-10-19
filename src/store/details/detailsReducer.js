import {
    CLEAR_DETAILS,
    loadNeighborsByBorder,
    SET_COUNTRY,
    SET_ERROR,
    SET_LOADING,
    SET_NEIGHBORS
} from "./detailsActions.js";

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: []
}

export const detailsReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: payload
            }
        case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: payload
            }
        case CLEAR_DETAILS:
            return initialState
        default:
            return state
    }
}