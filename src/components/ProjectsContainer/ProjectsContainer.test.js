import React from 'react';
import { shallow } from 'enzyme';
import { ProjectsContainer } from './ProjectsContainer';
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

  it('should render the correct amount of projects when renderProjects is called', () => {
    let result = wrapper.instance().renderProjects()
    expect(result.length).toBe(2)
  });
});