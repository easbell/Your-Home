import React from 'react';
import { shallow } from 'enzyme';
import RoomItems from './RoomItems';

describe('RoomItems', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<RoomItems/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});