import React from 'react';
import { shallow } from 'enzyme';
import { NewMaterial, mapDispatchToProps } from './NewMaterial';
import { addNewMaterial } from '../../thunks/addNewMaterial';

jest.mock('../../thunks/addNewMaterial');

describe('NewMaterial', () => {
  let wrapper;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<NewMaterial addNewMaterial={mockFn} forceRender={mockFn}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state visible when showModal is called', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should updateState for correct name and value on onChange', () => {
    const mockedEvent = { target: {name: 'name', value: 'new name'} };
    wrapper.instance().onChange(mockedEvent);
    expect(wrapper.state('name')).toBe('new name');
  });

  it('should update state visible when handleCancel is called', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });
  
  it('should update state visible on handleCreate', async () => {
    wrapper.setState({ visible: true });
    await wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should dispatch addNewMaterial', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addNewMaterial();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addNewMaterial();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});