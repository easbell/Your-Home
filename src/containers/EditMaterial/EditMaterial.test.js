import React from 'react';
import { shallow } from 'enzyme';
import EditMaterials from './EditMaterials';

describe('EditMaterials', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditMaterials/>)
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