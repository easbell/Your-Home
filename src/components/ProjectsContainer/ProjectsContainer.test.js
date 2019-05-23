import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from './ProjectsContainer';
import mockProjects from '../../mockProject'

describe('ProjectsContainer', () => {
  let wrapper;
  let projects;
  beforeEach(() => {
    projects = mockProjects.data.projects
    wrapper = shallow(<ProjectsContainer projects={projects}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});