import React from 'react';
import { shallow } from 'enzyme';
import MaterialDetails from './MaterialDetails';

describe('MaterialDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MaterialDetails/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('showModal', () => {
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('handleOK', () => {
    wrapper.instance().handleOk();
    expect(wrapper.state('visible')).toBe(false);
  });
  
  it('handleCancel', () => {
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

});