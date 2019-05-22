import React from 'react';
import { shallow } from 'enzyme';
import NewProject from './NewProject';
// import ProjectForm from './NewProject';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NewProject/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should setState on nextField', () => {
    wrapper.setState('current').toBe(0);
    wrapper.instance().nextField();
    expect(wrapper.state('current')).toEqual(1);
  });

  it.skip('should setState on prev', () => {
    wrapper.setState('current').toBe(1);
    wrapper.instance().prev();
    expect(wrapper.state('current')).toEqual(0);
  });

  it('should setState on submit', () => {
    wrapper.instance().submit();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should setState on addRoom', () => {
    wrapper.instance().addRoom('Kitchen');
    expect(wrapper.state('rooms')).toEqual(['Kitchen']);
  });

  it('should setState on showModal', () => {
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should setState on handleCancel', () => {
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });
});