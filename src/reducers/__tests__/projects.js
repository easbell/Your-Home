import projects from '../projects';
import * as actions from '../../actions';

describe('projects', () => {
  it('should return an empty array by default', () => {
    const expected = []
    const result = projects(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return an array if the action type is ADD_PROJECT', () => {
    const mockProject = {project: {name: 'project'}};
    const mockAction = actions.addProject(mockProject)
    const result = projects(undefined, mockAction)
    expect(result).toEqual([mockProject])
  });
});