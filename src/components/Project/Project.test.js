import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('Project', () => {
  let wrapper;
  let mockRooms;
  beforeEach(() => {
    mockRooms =  [
          {
              "name": "Living Room 1",
              "type": "Living Room",
              "description": "Northeast living room",
              "roomMaterials": [{}]
          },
          {
              "name": "Room 2",
              "type": "Kitchen",
              "description": "Big Kitchen",
              "roomMaterials": [{}]
          }
      ]
    wrapper = shallow(<Project rooms={mockRooms}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});