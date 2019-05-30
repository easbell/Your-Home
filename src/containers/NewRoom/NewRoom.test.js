import React from 'react';
import { shallow } from 'enzyme';
import { NewRoom, mapDispatchToProps } from './NewRoom';
import { addNewRoom } from '../../thunks/addNewRoom';

jest.mock('../../thunks/addNewRoom');

describe('NewRoom', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<NewRoom addNewRoom={mockFn}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state visible when showModal is called', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should updateState for correct name and value on newRoom', () => {
    const mockedEvent = { target: {name: 'name', value: 'new name'} };
    wrapper.instance().newRoom(mockedEvent);
    expect(wrapper.state('name')).toBe('new name');
  });

  it('should update state visible when handleCancel is called', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should update state visible on handleCreate', () => { 
    wrapper.setState({ visible: true })
    wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should dispatch addNewRoom', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addNewRoom();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addNewRoom();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  
});