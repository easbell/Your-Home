import React from 'react';
import { shallow } from 'enzyme';
import EditMaterial from './EditMaterial';

describe('EditMaterial', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditMaterial/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('showModal', () => {
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('handleCancel', () => {
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('handleCreate', () => {

  });

  it('saveFormRef', () => {

  });

});