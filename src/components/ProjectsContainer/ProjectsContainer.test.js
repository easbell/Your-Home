import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from './ProjectsContainer';

describe('ProjectsContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProjectsContainer/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});