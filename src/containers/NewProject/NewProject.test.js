import React from 'react';
import { shallow } from 'enzyme';
import { NewProject, mapDispatchToProps, ProjectForm } from './NewProject';
import { addNewProject } from '../../thunks/addNewProject';

describe('App', () => {
  let wrapper;
  let mockFn;
  let formWrapper;
  
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<NewProject addNewProject={mockFn} />);
    formWrapper = shallow(<ProjectForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(formWrapper).toMatchSnapshot();
  });

  it('should update state on onChange', () => {
    const mockedEvent = { target: {value: 'name', name: 'name'} };
    wrapper.instance().onChange(mockedEvent);
    expect(wrapper.state('name')).toBe('name');
  });

  it('should setState on nextField', () => {
    wrapper.setState({ current: 0 });
    wrapper.instance().nextField();
    expect(wrapper.state('current')).toEqual(1);
  });

  it('should setState on prev', () => {
    wrapper.setState({ current: 1 });
    wrapper.instance().prev();
    expect(wrapper.state('current')).toEqual(0);
  });

  it('should setState on submit', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().submit();
    expect(wrapper.state('visible')).toBe(false);
  });
  
  it('should call addNewProject upon submit', () => {
    wrapper.instance().submit();
    expect(mockFn).toHaveBeenCalled();
  });

  it('should setState on addRoom', () => {
    wrapper.instance().addRoom('Kitchen');
    expect(wrapper.state('rooms')).toEqual([{
           "id": undefined,
           "name": "Kitchen",
           "type": "Kitchen"
         }]);
  });

  it('should setState on showModal', () => {
    wrapper.setState({ visible: false })
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should setState on handleCancel', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  describe('mapDispatchToProps', () => {
    it.skip('should dispatch addProject when addProject is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addNewProject();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addNewProject();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});