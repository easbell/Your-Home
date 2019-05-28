import { addNewProject } from './addNewProject';
import { isLoading, addProject, hasErrored } from '../actions';

describe('addNewProject', () => {
  let mockProject;
  let mockDispatch;
  
  beforeEach(() => {
    mockProject = {createProject: {name: 'my project' }}
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockProject)
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = addNewProject()
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch', async () => {
    const thunk = addNewProject()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalled()
  });

  it.skip('dispatches setProject action', async () => {
    const thunk = addNewProject();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addProject(mockProject))
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = addNewProject()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = addNewProject()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});