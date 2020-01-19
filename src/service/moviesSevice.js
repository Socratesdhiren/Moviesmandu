import {
    movieFetchRequest,
    movieFetchRequestSuccess,
    movieFetchRequestFailure
} from '../actions/movieAction'
import {
    movieDetailFetchRequest,
    movieDetailFetchRequestSuccess,
    movieDetailFetchRequestFailure
} from '../actions/movieDetailAction'
import { fetch } from '../utility/apifile';

export  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const fetchMoviesListByName = (formData) => {
    return dispatch => {
        dispatch(movieFetchRequest());
        return fetch(`?s=${formData.name}&apikey=${API_KEY}&page=${formData.page}`)
            .then(response => {
                if (response.Response !=='False') {
                    dispatch(movieFetchRequestSuccess(response));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(movieFetchRequestFailure(error.Error)));
    };
};

export const fetchMovieDetailByIdentifier = (identifier) => {
    return dispatch => {
        dispatch(movieDetailFetchRequest());
        return fetch(`?i=${identifier}&apikey=${API_KEY}`)
            .then(response => {
                if (response.Response !=='False') {
                    dispatch(movieDetailFetchRequestSuccess(response.data));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(movieDetailFetchRequestFailure(error.Error)));
    };
};
