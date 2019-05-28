import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;
  let mockFn;
  
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<App fetchAllProjects={mockFn}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});