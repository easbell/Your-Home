import React from 'react';
import { shallow } from 'enzyme';
import { EditMaterial } from './EditMaterial';
import { CollectionCreateForm } from './EditMaterial';

describe('EditMaterial', () => {
  let wrapper;
  let formWrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<EditMaterial/>)
    formWrapper = shallow(
      <CollectionCreateForm 
        visible={mockFn}
        onCancel={mockFn}
        onCreate={mockFn}
        form={mockFn}
        editMaterial={mockFn}
    />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(formWrapper).toMatchSnapshot();
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

  it('should updateState for correct name and value on editMaterial', () => {
    const mockedEvent = { target: {name: 'name', value: 'new name'} };
    wrapper.instance().editMaterial(mockedEvent);
    expect(wrapper.state('name')).toBe('new name');
  });

  it('should should update state visible', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });
});