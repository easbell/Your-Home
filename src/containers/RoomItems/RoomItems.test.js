import React from 'react';
import { shallow } from 'enzyme';
import RoomItems from './RoomItems';

describe('RoomItems', () => {
  let wrapper;
  let mockMaterials;
  
  beforeEach(() => {
    mockMaterials = [
      {
          "id": 1,
          "element_type": "Flooring",
          "material": {
              "id": 1,
              "name": "Material 1",
              "model_number": "abc1",
              "brand": "Kenmoore",
              "vendor": "HD",
              "manual_url": null,
              "notes": null,
              "quantity": null,
              "unit_price": null
          }
      },
      {
          "id": 2,
          "element_type": "Flooring",
          "material": {
              "id": 2,
              "name": "Material 2",
              "model_number": "abc2",
              "brand": "Kenmoore",
              "vendor": "HD",
              "manual_url": null,
              "notes": null,
              "quantity": null,
              "unit_price": null
          }
      },
      {
        "id": 3,
        "element_type": "Fixtures",
        "material": {
            "id": 3,
            "name": "Material A",
            "model_number": "abc1",
            "brand": "GE",
            "vendor": "HD",
            "manual_url": null,
            "notes": null,
            "quantity": null,
            "unit_price": null
        }
    }
  ]
    wrapper = shallow(<RoomItems materials={mockMaterials} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should collect all categories when renderMaterialTypes is called', () => {
    let result = wrapper.instance().renderMaterialTypes()
    expect(result.length).toBe(2)
  });

  it('should render category panels for each category collected when renderMaterialTypes is called', () => {

  });

  it('should render materials when renderMaterials is called', () => {

  });
});