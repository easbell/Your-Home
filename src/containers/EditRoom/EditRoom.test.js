import React from 'react';
import { shallow } from 'enzyme';
import EditRoom from './EditRoom';

describe('EditRoom', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditRoom/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('showModal', () => {
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('handleCreate', () => {
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('saveFormRef', () => {

  });

  it('handleCreate', () => {

  });

});