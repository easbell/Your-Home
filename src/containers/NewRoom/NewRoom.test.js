import React from 'react';
import { shallow } from 'enzyme';
import NewRoom from './NewRoom';

describe('NewRoom', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewRoom/>)
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