import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { mapStateToProps, mapDispatchToProps } from './App';

jest.mock('../../thunks/fetchAllProjects')

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

  it('should return a state object', () => {
    const mockState = {
      projects: [],
      materials: [],
      randomState: {}
    }
    const expected = {
      projects: []
    }

    const mockProps = mapStateToProps(mockState)
    expect(mockProps).toEqual(expected)
  });

  it('should mapDispatchToProps', () => {
    const mockProjects = [{ name: 'mockProject1', id: '1', materials: [{}, {}]}, { name: 'mockProject2', id: '2', materials: [{}, {}]}, { name: 'mockProject3', id: '3', materials: [{}, {}]}]
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchAllProjects(mockProjects)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchAllProjects(mockProjects)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

});