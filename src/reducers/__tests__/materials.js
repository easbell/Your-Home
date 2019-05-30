import materials from '../materials';
import * as actions from '../../actions';

describe('materials reducer', () => {
  it('should return an empty object by default', () => {
    const expected = {}
    const result = materials(undefined, {})
    expect(result).toEqual(expected)
  });

  it.skip('should return an object if the action type is ADD_MATERIAL', () => {
    const mockMaterial = {material: {element_type: 'cool', material: [{name:
    'yellow sink', id: 3,  brand: 'best brand', model_number: 'abc',
    unit_price: 12, vendor: 'Pat', quantity: 33, manual_url: 'no', notes: ''}]}};
    const mockAction = actions.addMaterial(mockMaterial)
    const mockState = { type: mockAction.material.type}
    const result = materials(undefined, mockAction)
    expect(result).toEqual(mockState)
  });

  it('should return an object if the action type is SET_MATERIALS', () => {
    const mockMaterials = [{sink: [{name: 'yellow sink'}], shower: {name: 'walk in shower'}}];
    const mockAction = actions.setMaterials(mockMaterials)
    const result = materials(undefined, mockAction)
    expect(result).toEqual(mockMaterials)
  });
});