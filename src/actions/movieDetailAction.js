import {
    MOVIE_DETAIL_FETCH_REQUEST,
    MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
    MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
    MOVIE_DETAIL_CLEAN_REQUEST,
} from './actionTypes'

export const movieDetailFetchRequest = () => {
    return {
        type: MOVIE_DETAIL_FETCH_REQUEST,
    };
};

export const movieDetailFetchRequestSuccess = data => {
    return {
        type: MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const movieDetailFetchRequestFailure = error => {
    return {
        type: MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const movieCleanRequest = () => {
    return {
        type: MOVIE_DETAIL_CLEAN_REQUEST,
    };
};
