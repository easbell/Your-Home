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

  it('should update state visible when showModal is called', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should update state visible when handleCancel is called', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('saveFormRef', () => {

  });

  describe('handleCreate', () => {
    it('should validateFields', () => {

    });

    it('should reset fields', () => {

    });

    it.skip('should should update state visible', () => {
      wrapper.setState({ visible: true })
      wrapper.instance().handleCreate();
      expect(wrapper.state('visible')).toBe(false);
    });
  });

});