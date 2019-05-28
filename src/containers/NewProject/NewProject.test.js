import React from 'react';
import { shallow } from 'enzyme';
import { NewProject, mapDispatchToProps, ProjectForm } from './NewProject';
import { addProject } from '../../actions';

describe('App', () => {
  let wrapper;
  let mockFn;
  let formWrapper;
  
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<NewProject addProject={mockFn} />);
    formWrapper = shallow(<ProjectForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(formWrapper).toMatchSnapshot();
  });

  it('should update state on addName', () => {
    const mockedEvent = { target: {value: 'name'} };
    wrapper.instance().addName(mockedEvent);
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

  it('should setState on addRoom', () => {
    wrapper.instance().addRoom('Kitchen');
    expect(wrapper.state('rooms')).toEqual([{
           "id": undefined,
           "name": "Kitchen",
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
    it('should dispatch addProject when addProject is called', () => {
      const mockProject = {name: 'name', rooms: '4'}
      const mockDispatch = jest.fn();
      const actionToDispatch = addProject(mockProject);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProject(mockProject);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});