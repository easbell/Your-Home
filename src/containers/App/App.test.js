import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { setProjects } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './App';

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

  it.skip('should mapDispatchToProps', () => {
    const mockProjects = [{ name: 'mockProject1', id: '1', materials: [{}, {}]}, { name: 'mockProject2', id: '2', materials: [{}, {}]}, { name: 'mockProject3', id: '3', materials: [{}, {}]}]
    const mockDispatch = jest.fn()
    const actionToDispatch = setProjects(mockProjects)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setProjects(mockProjects)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

});