import React from 'react';
import { shallow } from 'enzyme';
import { EditRoom, mapDispatchToProps } from './EditRoom';
import { editRoomThunk } from '../../thunks/editRoomThunk';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';

jest.mock('../../thunks/editRoomThunk');
jest.mock('../../thunks/fetchAllProjects');


describe('EditRoom', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<EditRoom editRoomThunk={mockFn} fetchAllProjects={mockFn}/>)
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

  it('should should update state visible', async () => {
    wrapper.setState({ visible: true })
    await wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should call editRoomThunk in mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = editRoomThunk()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.editRoomThunk()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('should call fetchAllProjects in mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchAllProjects()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchAllProjects()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});