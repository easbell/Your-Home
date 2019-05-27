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

  it('should update state visible when showModal is called', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should update state visible when handleCancel is called', () => {
    wrapper.setState({ visible: true });
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should updateState for correct name and value on editRoom', () => {
    const mockedEvent = { target: {name: 'name', value: 'new name'} };
    wrapper.instance().editRoom(mockedEvent);
    expect(wrapper.state('name')).toBe('new name');
  });

  it('should should update state visible', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });

});