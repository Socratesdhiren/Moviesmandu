import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router';

import ConnectedListContainer, {ListContainer} from './ListContainer';
import List from '../../component/Movies/List';
import mockResponse from '../../../__mock__/movie';

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const INITIAL_STATE = {
    movies: [], movieErrors: {}, movieLoading: false, moviePagination: {}, movieDetails: []
    , movieDetailErrors: {}, movieDetailLoading: {}
};

let wrapper, store;

describe('Movies container --- ListContainer', () => {
    const props = {
        actions: {
            fetchMoviesListByName: jest.fn(),
            cleanMovie: jest.fn(),
            movieCleanRequest: jest.fn(),
            fetchMovieDetailByIdentifier: jest.fn(),
        },
    };

    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = shallow(<ListContainer {...props} store={store}/>);
    });

    it('should render correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('should contain the List', () => {
        expect(wrapper.containsMatchingElement(<List/>)).toEqual(true);
    });

    it('should have a prop fetchMoviesListByName', () => {
        expect(wrapper.prop('fetchMoviesListByName')).toBeDefined();
    });

    it('passes fetchMoviesListByName to List', () => {
        const fetchMoviesListByName = wrapper.instance().fetchMoviesListByName;
        expect(wrapper.find(List).prop('fetchMoviesListByName')).toEqual(fetchMoviesListByName);
    });

    it('fetchMoviesListByName should call fetchMoviesListByName with the correct argument', () => {
        wrapper.instance().fetchMoviesListByName(mockResponse.movieList.Search.Title);
        expect(props.actions.fetchMoviesListByName).toHaveBeenCalledTimes(1);
        expect(props.actions.fetchMoviesListByName).toHaveBeenCalledWith(
            mockResponse.movieList.Search.Title
        );
    });

    it('should have a prop fetchMovieDetailByIdentifier', () => {
        expect(wrapper.prop('fetchMovieDetailByIdentifier')).toBeDefined();
    });

    it('passes fetchMovieDetailByIdentifier to List', () => {
        const fetchMovieDetailByIdentifier = wrapper.instance().fetchMovieDetailByIdentifier;
        expect(wrapper.find(List).prop('fetchMovieDetailByIdentifier')).toEqual(fetchMovieDetailByIdentifier);
    });

    it('fetchMovieDetailByIdentifier should call fetchMovieDetailByIdentifier with the correct argument', () => {
        wrapper.instance().fetchMovieDetailByIdentifier(mockResponse.movieList.Search.imdbID);
        expect(props.actions.fetchMovieDetailByIdentifier).toHaveBeenCalledTimes(1);
        expect(props.actions.fetchMovieDetailByIdentifier).toHaveBeenCalledWith(mockResponse.movieList.Search.imdbID);
    });

    it('should have a prop cleanMovie', () => {
        expect(wrapper.prop('cleanMovie')).toBeDefined();
    });

    it('passes cleanMovie to List', () => {
        const cleanMovie = wrapper.instance().cleanMovie;
        expect(wrapper.find(List).prop('cleanMovie')).toEqual(cleanMovie);
    });

    it('cleanMovie should call movieCleanRequest with the correct argument', () => {
        wrapper.instance().cleanMovie();
        expect(props.actions.movieCleanRequest).toHaveBeenCalledTimes(1);
        expect(props.actions.movieCleanRequest).toHaveBeenCalledWith();
    });
});

describe('Container --- ConnectedEditContainer', () => {
    let store, wrapper;

    const INITIAL_STATE = {
        movies: {
            payload: mockResponse.movieList.Search,
            pagination: mockResponse.movieList,
        },
        movieDetails: [mockResponse.movieList.Search],
    };

    const props = {
        fetchMoviesListByName: jest.fn(),
        cleanMovie: jest.fn(),
        movieCleanRequest: jest.fn(),
        fetchMovieDetailByIdentifier: jest.fn(),
    };

    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <ConnectedListContainer>
                        <List {...props} />
                    </ConnectedListContainer>
                </Router>
            </Provider>
        );
    });

    it('should render the connected component', () => {
        expect(wrapper.find(ConnectedListContainer).length).toEqual(1);
    });
});
