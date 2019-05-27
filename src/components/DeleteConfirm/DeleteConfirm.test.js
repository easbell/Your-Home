import React from 'react';
import { shallow } from 'enzyme';
import DeleteConfirm from './DeleteConfirm';

describe('DeleteConfirm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DeleteConfirm />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run show confirm when button is clicked', () => {
    // perhaps a simulation
    //
  });

  it('should confirm new data', () => {
    // prob check to see if correct functions are run depending on type
    //
  });

  //not sure if we need to test cancel?

});