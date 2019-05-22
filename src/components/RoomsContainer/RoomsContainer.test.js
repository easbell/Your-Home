import React from 'react';
import { shallow } from 'enzyme';
import RoomsContainer from './RoomsContainer';

describe('RoomsContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RoomsContainer/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});