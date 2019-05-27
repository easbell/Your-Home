import React from 'react';
import { shallow } from 'enzyme';
import EditProject from './EditProject';

describe('EditProject', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditProject/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('showModal', () => {

  });

  it('handleCreate', () => {

  });

  it('saveFormRef', () => {

  });

});