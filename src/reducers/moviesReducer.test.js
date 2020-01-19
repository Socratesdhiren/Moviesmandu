import React from 'react';
import moviesReducer from './moviesReducer';
import {
    MOVIE_FETCH_REQUEST,
    MOVIE_FETCH_REQUEST_SUCCESS,
    MOVIE_FETCH_REQUEST_FAILURE,
    MOVIE_CLEAN_REQUEST
} from '../actions/actionTypes';

import mockResponse from '../../__mock__/movie';

const payload = mockResponse.movieList;
const error = mockResponse.movieErrors;

describe('REDUCER --- moviesReducer', () => {
    it('should return the MOVIE_INITIAL_STATE', () => {
        const INITIAL_STATE = {
            payload: [],
            loading: false,
            errors: {},
        };
        expect(moviesReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle the MOVIE_FETCH_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = moviesReducer(INITIAL_STATE, {
            type: MOVIE_FETCH_REQUEST,
        });
        expect(state).toEqual({loading: true});
    });

    it('should handle the MOVIE_FETCH_REQUEST_SUCCESS', () => {
        const INITIAL_STATE = {
            payload: [],
            loading: false,
            errors: {},
        };
        const state = moviesReducer(INITIAL_STATE, {
            type: MOVIE_FETCH_REQUEST_SUCCESS,
            data: payload,
        });
        expect(state).toEqual({
            payload: payload,
            loading: false,
            errors: {},
        });
    });

    it('should handle the MOVIE_FETCH_REQUEST_FAILURE', () => {
        const INITIAL_STATE = {
            loading: false,
            errors: {},
        };
        const state = moviesReducer(INITIAL_STATE, {
            type: MOVIE_FETCH_REQUEST_FAILURE,
            error: error,
        });
        expect(state).toEqual({loading: false, errors: error});
    });

    it('should handle the MOVIE_CLEAN_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = moviesReducer(INITIAL_STATE, {
            type: MOVIE_CLEAN_REQUEST,
        });
        expect(state).toEqual({
            loading: false,
            payload: [],
            errors: {},
        });
    });
});
