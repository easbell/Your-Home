import React from 'react';
import { shallow } from 'enzyme';
import Room from './Room';

describe('Room', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Room/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});