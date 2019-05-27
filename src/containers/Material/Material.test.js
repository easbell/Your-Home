import React from 'react';
import { shallow } from 'enzyme';
import Material from './Material';

describe('Material', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Material/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});