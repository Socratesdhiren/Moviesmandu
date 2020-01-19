import React from 'react';
import { Form } from 'antd';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import List from './List';
import mockResponse from '../../../__mock__/movie';

Enzyme.configure({ adapter: new Adapter() });

describe('COMPONENT --- Movie List Mount', () => {
  let wrapper;

  const props = {
    fetchMoviesListByName: jest.fn(),
    onSearch: jest.fn(),
    moviePagination: mockResponse.movieList,
    movies: mockResponse.movieList.Search,
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <List {...props} />
      </Router>
    );
  });

  it('render the wrappers', () => {
    wrapper.mount();
    expect(wrapper.length).toBe(1);
  });

  it('should render the form component', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });

  it('should have a onSubmit attribute', () => {
    expect(wrapper.find(Form).props().onSubmit).toBeDefined();
  });

  it('onSubmit attribute should be of type function', () => {
    expect(typeof wrapper.find(Form).props().onSubmit === 'function').toBe(true);
  });

  it('search  when data is entered', async done => {
    wrapper
        .find('input[id="searchParameter"]')
        .at(0)
        .simulate('change', { target: { value: 'fast furious', page:1 } });
    wrapper.update();
    wrapper
        .find('.ant-table-column-title')
        .at(2)
        .simulate('click');

    wrapper.find('input[id="searchParameter"]')
        .at(0)
        .simulate('click', {
      preventDefault: () => {},
    });
    setTimeout(() => {
      wrapper.update();
      done();
    }, 0);
  });
  it('submit the error when empty field', async done => {
    wrapper.find('Button').simulate('submit', {
      preventDefault: () => {},
    });
    setTimeout(() => {
      wrapper.update();
      done();
    }, 0);
  });

});
