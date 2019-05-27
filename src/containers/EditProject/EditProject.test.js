import React from 'react';
import { shallow } from 'enzyme';
import EditProject from './EditProject';

describe('EditProject', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditProject/>)
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

  it('handelCreate', () => {

  });

  it('saveFormRef', () => {

  });

});