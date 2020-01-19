import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Import custom components
import List from '../../component/Movies/List';
import * as moviesSevice from '../../service/moviesSevice';
import * as movieDetailAction from '../../actions/movieDetailAction';


export class ListContainer extends Component {
    /**
     * Fetch movie by formData.
     * @param {object} formData
     *
     */
    fetchMoviesListByName = formData => {
        this.props.actions.fetchMoviesListByName(formData);
    };

    /**
     * Fetch movie detail by identifier.
     * @param {string} imdbID
     *
     */
    fetchMovieDetailByIdentifier = imdbID => {
        this.props.actions.fetchMovieDetailByIdentifier(imdbID);
    };

    /**
     * Clean single movie record on modal close
     *
     */
    cleanMovie = () => {
        this.props.actions.movieCleanRequest();
    };

    render() {

        return (
            <List
                fetchMoviesListByName={this.fetchMoviesListByName}
                fetchMovieDetailByIdentifier={this.fetchMovieDetailByIdentifier}
                cleanMovie={this.cleanMovie}
                {...this.props}
            />
        );
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    movies: state.movies.payload.data,
    movieErrors: state.movies.payload.data,
    movieLoading: state.movies.loading,
    moviePagination: state.movies.payload,
    movieDetails: state.movieDetails.payload,
    movieDetailErrors: state.movieDetails.payload,
    movieDetailLoading: state.movieDetails.loading,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({}, moviesSevice, movieDetailAction),
            dispatch
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);
