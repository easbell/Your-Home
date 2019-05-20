import React from 'react';
import { shallow } from 'enzyme';
import NewProject from './NewProject';
import ProjectForm from './NewProject';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NewProject/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState on handleCancel', () => {
    wrapper.instance().handleCancel();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should setState on showModal', () => {
    wrapper.instance().showModal();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should setState on handleCreate', () => {
    wrapper.instance().handleCreate();
    expect(wrapper.state('visible')).toBe(false);
  });
});