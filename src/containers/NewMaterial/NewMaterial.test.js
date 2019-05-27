import React from 'react';
import { shallow } from 'enzyme';
import NewMaterial from './NewMaterial';

describe('NewMaterial', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewMaterial/>)
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