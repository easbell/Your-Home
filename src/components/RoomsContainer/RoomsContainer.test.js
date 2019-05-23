import React from 'react';
import { shallow } from 'enzyme';
import RoomsContainer from './RoomsContainer';

describe('RoomsContainer', () => {
  let wrapper;
  let mockRooms;
  beforeEach(() => {
    mockRooms = [
      {
          "name": "Living Room 1",
          "type": "Living Room",
          "description": "Northeast living room",
          "roomMaterials": [
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
              }  
          ]
      },
      {
          "name": "Room 2",
          "type": "Kitchen",
          "description": "Big Kitchen",
          "roomMaterials": [
              {
                  "id": 3,
                  "element_type": "Shower",
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
          ]
      }
  ]
    wrapper = shallow(<RoomsContainer rooms={mockRooms}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct amount of rooms when renderRooms is called', () => {
    let result = wrapper.instance().renderRooms()
    expect(result.length).toBe(2)
  });

});