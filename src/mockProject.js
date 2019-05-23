const mockProjects = {
  "data": {
      "projects": [
          {
              "id": 1,
              "name": "House 1",
              "description": "Big, white house",
              "address": "123 Fake St.",
              "rooms": [
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
          },
          {
              "id": 2,
              "name": "House 2",
              "description": "Small with picket fence",
              "address": "456 Random Lane",
              "rooms": [
                  {
                      "name": "Room 3",
                      "type": "Bedroom",
                      "description": "Small bedroom",
                      "roomMaterials": []
                  }
              ]
          }
      ]
  }
}

export default mockProjects;