import React from 'react';
import { shallow } from 'enzyme';
import MaterialDetails from './MaterialDetails';

describe('MaterialDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MaterialDetails/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('showModal', () => {
 
  });

  it('handleOK', () => {
    
  });
  
  it('handleCancel', () => {
    
  });

});