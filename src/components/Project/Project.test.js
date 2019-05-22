import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('Project', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Project/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});