import React from 'react';
import { shallow } from 'enzyme';
import EditMaterial from './EditMaterial';

describe('EditMaterial', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditMaterial/>)
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