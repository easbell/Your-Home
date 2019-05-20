import React from 'react';
import { shallow } from 'enzyme';
import NewProject from './NewProject';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NewProject/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});