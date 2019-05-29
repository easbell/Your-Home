import React from 'react';
import { shallow } from 'enzyme';
import {DeleteConfirm} from './DeleteConfirm';

describe('DeleteConfirm', () => {
  let wrapper;
  let props = {
    id: 3,
    deleteProject: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<DeleteConfirm {...props}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should run showConfirm when button is clicked', () => {
    wrapper.find('.confirm-btn').simulate('click', props);
    const spy = jest.spyOn(wrapper.instance(), 'showConfirm');
    expect(spy).toHaveBeenCalled();
  });

  it('should delete a project when OK is clicked', () => {
    wrapper.instance().showConfirm()
  });

  //not sure if we need to test cancel?

});