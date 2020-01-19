import {
    movieDetailFetchRequest,
    movieDetailFetchRequestSuccess,
    movieDetailFetchRequestFailure,
    movieCleanRequest
} from './movieDetailAction';

import {
    MOVIE_DETAIL_FETCH_REQUEST,
    MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
    MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
    MOVIE_DETAIL_CLEAN_REQUEST
} from './actionTypes';
import mockResponse from '../../__mock__/movieDetail';

describe('ACTION --- movieDetailAction', () => {

    it('should handle MOVIE_DETAIL_FETCH_REQUEST', () => {
        const fetchRequest = movieDetailFetchRequest();
        expect(fetchRequest).toEqual({type: MOVIE_DETAIL_FETCH_REQUEST});
    });

    it('should handle MOVIE_DETAIL_FETCH_REQUEST_SUCCESS', () => {
        const fetchRequest = movieDetailFetchRequestSuccess(mockResponse.movieDetails);
        expect(fetchRequest).toEqual({
            type: MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
            data: mockResponse.movieDetails,
        });
    });

    it('should handle MOVIE_DETAIL_FETCH_REQUEST_FAILURE', () => {
        const fetchRequest = movieDetailFetchRequestFailure(mockResponse.movieDetailErrors.data);
        expect(fetchRequest).toEqual({
            type: MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
            error: mockResponse.movieDetailErrors.data,
        });
    });

    it('should handle MOVIE_DETAIL_CLEAN_REQUEST', () => {
        const fetchRequest = movieCleanRequest();
        expect(fetchRequest).toEqual({type: MOVIE_DETAIL_CLEAN_REQUEST});
    });
});
