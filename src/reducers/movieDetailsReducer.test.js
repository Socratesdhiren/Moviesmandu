import React from 'react';
import movieDetailsReducer from './movieDetailsReducer';
import {
    MOVIE_DETAIL_FETCH_REQUEST,
    MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
    MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
    MOVIE_DETAIL_CLEAN_REQUEST
} from '../actions/actionTypes';

import mockResponse from '../../__mock__/movieDetail';

const payload = mockResponse.movieDetails;
const error = mockResponse.movieDetailErrors;

describe('REDUCER --- movieDetailsReducer', () => {
    it('should return the MOVIE_INITIAL_STATE', () => {
        const INITIAL_STATE = {
            payload: [],
            loading: false,
            errors: {},
        };
        expect(movieDetailsReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle the MOVIE_DETAIL_FETCH_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = movieDetailsReducer(INITIAL_STATE, {
            type: MOVIE_DETAIL_FETCH_REQUEST,
        });
        expect(state).toEqual({loading: true});
    });

    it('should handle the MOVIE_DETAIL_FETCH_REQUEST_SUCCESS', () => {
        const INITIAL_STATE = {
            payload: [],
            loading: false,
            errors: {},
        };
        const state = movieDetailsReducer(INITIAL_STATE, {
            type: MOVIE_DETAIL_FETCH_REQUEST_SUCCESS,
            data: payload,
        });
        expect(state).toEqual({
            payload: payload,
            loading: false,
            errors: {},
        });
    });

    it('should handle the MOVIE_DETAIL_FETCH_REQUEST_FAILURE', () => {
        const INITIAL_STATE = {
            loading: false,
            errors: {},
        };
        const state = movieDetailsReducer(INITIAL_STATE, {
            type: MOVIE_DETAIL_FETCH_REQUEST_FAILURE,
            error: error,
        });
        expect(state).toEqual({loading: false, errors: error});
    });

    it('should handle the MOVIE_DETAIL_CLEAN_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = movieDetailsReducer(INITIAL_STATE, {
            type: MOVIE_DETAIL_CLEAN_REQUEST,
        });
        expect(state).toEqual({
            loading: false,
            payload: [],
            errors: {},
        });
    });
});
