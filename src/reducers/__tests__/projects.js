import projects from '../projects';
import * as actions from '../../actions';
import { addRoomHelper } from '../../utils/addRoomHelper';

jest.mock('../../utils/addRoomHelper');

describe('projects', () => {
  it('should return an empty array by default', () => {
    const expected = []
    const result = projects(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return an array if the action type is ADD_ROOM', () => {
    const mockRoom = {name: 'project'};
    const mockAction = actions.addRoom(mockRoom)
    projects(undefined, mockAction)
    expect(addRoomHelper).toHaveBeenCalled();
  });

  it('should return an array if the action type is SET_PROJECTS', () => {
    const mockProjects = [{project: {name: 'project'}}, {project: {name: 'project'}}];
    const mockAction = actions.setProjects(mockProjects)
    const result = projects(undefined, mockAction)
    expect(result).toEqual(mockProjects)
  });

  it('should return an array if the action type is ADD_PROJECT', () => {
    const mockProject = {project: {name: 'project'}};
    const mockAction = actions.addProject(mockProject)
    const result = projects(undefined, mockAction)
    expect(result).toEqual([mockProject])
  });

  it('should return an array if the action type is DELETE_PROJECT', () => {
    const mockProject = {project: {name: 'project'}};
    const mockAction = actions.deleteAProject(mockProject)
    const result = projects(undefined, mockAction)
    expect(result).toEqual([])
  });

  it('should return an array if the action type is EDIT_PROJECT', () => {
    const mockProject = {project: {name: 'project'}};
    const mockAction = actions.editProject(mockProject)
    const result = projects(undefined, mockAction)
    expect(result).toEqual([mockProject])
  });

  it.skip('should return an array if the action type is DELETE_ROOM', () => {
    const mockRoom = {project: {name: 'project', rooms: ['room']}};
    const mockAction = actions.deleteARoom(mockRoom)
    const result = projects(undefined, mockAction)
    expect(result).toEqual([mockRoom])
  });
});