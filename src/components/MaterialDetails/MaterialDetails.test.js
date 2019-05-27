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

  it('should update state visible when showModal is called', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should update state visible when handleOK is called', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleOk();
    expect(wrapper.state('visible')).toBe(false);
  });
  
  it('should update state visible when handleCancel is called', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

});