import {
    MOVIE_DETAIL_FETCH_REQUEST,
    MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
    MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
    MOVIE_DETAIL_CLEAN_REQUEST
} from '../actions/actionTypes'

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const moviesReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case MOVIE_DETAIL_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case MOVIE_DETAIL_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case MOVIE_DETAIL_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case MOVIE_DETAIL_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: {},
            });

        default:
            return state;
    }
};

export default moviesReducer;
