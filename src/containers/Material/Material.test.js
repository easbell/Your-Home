import React from 'react';
import { shallow } from 'enzyme';
import Material from './Material';

describe('Material', () => {
  let wrapper;
  let mockMaterial;
  beforeEach(() => {
    mockMaterial = {
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
  }
    wrapper = shallow(<Material material={mockMaterial} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});