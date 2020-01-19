import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import MovieDetail from './MovieDetail';
import mockResponse from '../../../__mock__/movieDetail';

Enzyme.configure({ adapter: new Adapter() });

describe('Component ---Movies MovieDetail', () => {
  let wrapper;

  const props = {
    fetchBranchByIdentifier: jest.fn(),
    cleanBranch: jest.fn(),
    movieDetails: mockResponse.movieDetails,
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <MovieDetail {...props} />
      </Router>
    );
  });

  it('should render the  component correctly', () => {
    expect(wrapper.length).toBe(1);
  });
});
