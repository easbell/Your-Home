import { SideDrawer } from './SideDrawer';
import React from 'react';
import { shallow } from 'enzyme';

describe('SideDrawer', () => {
  let wrapper;
  let mockProjects

  beforeEach(() => {
    mockProjects = ['1', '2']
    wrapper = shallow(<SideDrawer projects={mockProjects}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState on showDrawer', () => {
    wrapper.instance().showDrawer();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should setState on onClose', () => {
    wrapper.instance().onClose();
    expect(wrapper.state('visible')).toBe(false);
  });

});