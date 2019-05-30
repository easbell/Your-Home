import React from 'react';
import { shallow } from 'enzyme';
import { EditProject, mapDispatchToProps } from './EditProject';
import { editProjectThunk } from '../../thunks/editProjectThunk';

jest.mock('../../thunks/editProjectThunk');

describe('EditProject', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<EditProject editProjectThunk={mockFn}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state visible when showModal is called', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should updateState for correct name and value on editProject', () => {
    const mockedEvent = { target: {name: 'name', value: 'new name'} };
    wrapper.instance().editProject(mockedEvent);
    expect(wrapper.state('name')).toBe('new name');
  });

  it('should update state visible when handleCancel is called', () => {
    wrapper.setState({ visible: true });
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false)
  });

  it('should update state visible when handleCreate is called', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should call correct props in mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = editProjectThunk()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.editProjectThunk()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});