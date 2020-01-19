import {
    movieFetchRequest,
    movieFetchRequestSuccess,
    movieFetchRequestFailure,
} from './movieAction';

import {
    MOVIE_FETCH_REQUEST,
    MOVIE_FETCH_REQUEST_SUCCESS,
    MOVIE_FETCH_REQUEST_FAILURE,
} from './actionTypes';
import mockResponse from '../../__mock__/movie';

describe('ACTION --- movieAction', () => {

    it('should handle MOVIE_FETCH_REQUEST', () => {
        const fetchRequest = movieFetchRequest();
        expect(fetchRequest).toEqual({type: MOVIE_FETCH_REQUEST});
    });

    it('should handle MOVIE_FETCH_REQUEST_SUCCESS', () => {
        const fetchRequest = movieFetchRequestSuccess(mockResponse.movieList);
        expect(fetchRequest).toEqual({
            type: MOVIE_FETCH_REQUEST_SUCCESS,
            data: mockResponse.movieList,
        });
    });

    it('should handle MOVIE_FETCH_REQUEST_FAILURE', () => {
        const fetchRequest = movieFetchRequestFailure(mockResponse.movieErrors.data);
        expect(fetchRequest).toEqual({
            type: MOVIE_FETCH_REQUEST_FAILURE,
            error: mockResponse.movieErrors.data,
        });
    });
});
