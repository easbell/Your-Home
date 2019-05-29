import React from 'react';
import { shallow } from 'enzyme';
import Materials from './Materials';


describe('Materials', () => {
  let wrapper;
  let mockMaterials;
  
  beforeEach(() => {
    mockMaterials = {
      shower: [
        {
          brand: "Kenmoore",
          id: 1,
          manual_url: null,
          model_number: "abc1",
          name: "Material 1",
          notes: null,
          quantity: null,
          unit_price: null,
          vendor: "HD"
        },
        {
          brand: "Best brand",
          id: 2,
          manual_url: null,
          model_number: "1234aa",
          name: "Material 2",
          notes: null,
          quantity: null,
          unit_price: null,
          vendor: "HD"
        }
      ],
      sink: [
        {
          brand: "Kenmoore",
          id: 3,
          manual_url: null,
          model_number: "hejso125",
          name: "Material 3",
          notes: null,
          quantity: null,
          unit_price: null,
          vendor: "HD"
        }
      ]
    }
    wrapper = shallow(<Materials materials={mockMaterials} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should collect all categories when renderMaterialTypes is called', () => {
    let result = wrapper.instance().renderMaterialTypes();
    expect(result.length).toBe(2);
  });

  it('should render materials when renderMaterials is called', () => {
    let result = wrapper.instance().renderMaterials('shower');
    expect(result.length).toBe(2);
  });

  it('should update state to be the same for purposes of forcing a rerender', () => {
    wrapper.setState({ expanded: false });
    let initialState = wrapper.state;
    wrapper.instance().forceRender();
    expect(wrapper.state).toBe(initialState);
  })
});