import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetails from './ProjectDetails';

describe('ProjectDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProjectDetails/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});