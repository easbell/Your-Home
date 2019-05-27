import React from 'react';
import { shallow } from 'enzyme';
import EditRoom from './EditRoom';

describe('EditRoom', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditRoom/>)
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