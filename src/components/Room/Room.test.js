import React from 'react';
import { shallow } from 'enzyme';
import Room from './Room';

describe('Room', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Room/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState on showDrawer', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showDrawer();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should setState on onClose', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().onClose();
    expect(wrapper.state('visible')).toBe(false);
  });

});