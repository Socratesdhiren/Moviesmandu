
import  { MOVIE_FETCH_REQUEST,MOVIE_FETCH_REQUEST_SUCCESS,MOVIE_FETCH_REQUEST_FAILURE} from './actionTypes'

export const movieFetchRequest = () => {
    return {
        type: MOVIE_FETCH_REQUEST,
    };
};

export const movieFetchRequestSuccess = data => {
    return {
        type: MOVIE_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const movieFetchRequestFailure = error => {
    return {
        type: MOVIE_FETCH_REQUEST_FAILURE,
        error,
    };
};
