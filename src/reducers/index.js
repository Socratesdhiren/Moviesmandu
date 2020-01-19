import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";

import history from '../utility/history';

import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';

const rootReducer = combineReducers({
    router: connectRouter(history),
    movies: moviesReducer,
    movieDetails:movieDetailsReducer
});

export default rootReducer;
