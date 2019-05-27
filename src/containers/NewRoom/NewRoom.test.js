import React from 'react';
import { shallow } from 'enzyme';
import NewRoom from './NewRoom';

describe('NewRoom', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewRoom/>)
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

  it('saveFormRef', () => {

  });

  it('handleCreate', () => {

  });
  
});