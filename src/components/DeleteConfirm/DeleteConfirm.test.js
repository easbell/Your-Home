import React from 'react';
import { shallow } from 'enzyme';
import DeleteConfirm from './DeleteConfirm';

describe('DeleteConfirm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DeleteConfirm type='project'/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should run showConfirm when button is clicked', () => {
    wrapper.find('.confirm-btn').simulate('click', wrapper.props.type);
    const spy = jest.spyOn(wrapper.instance(), 'showConfirm');
    expect(spy).toHaveBeenCalled();
  });

  it('should confirm new data', () => {
    // prob check to see if correct functions are run depending on type
    //
  });

  //not sure if we need to test cancel?

});