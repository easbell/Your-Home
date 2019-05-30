import { addRoomHelper, deleteRoomHelper } from '../addRoomHelper';

describe('addRoomHelper', () => {
  it('should return a new state', () => {
    const mockRoom = {project: {id: 1}}
    const mockState = [{project: {id: 1}}]
    const result = addRoomHelper(mockRoom, mockState);
    expect(result).toEqual(mockState);
  });
});

describe('deleteRoomHelper', () => {
  it('should return a new state e', () => {
    const mockState = [ {project: {id: 1}, rooms: [{id: 2}] } ];
    const mockProjectId = '1';
    const mockRoom = {id: 2}
    const expectedState = [{"project": {"id": 1}, rooms:  [{"id": 2}]}]
    const result = deleteRoomHelper(mockRoom, mockProjectId, mockState);
    expect(result).toEqual(expectedState);
  });


});