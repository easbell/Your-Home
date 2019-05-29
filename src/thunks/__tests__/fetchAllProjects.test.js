import { fetchAllProjects } from '../fetchAllProjects';
import { isLoading, setProjects, hasErrored } from '../../actions';

describe('fetchAllProjects', () => {
  let mockDispatch;
  let mockProjects;
  
  beforeEach(() => {
    mockProjects = [{id: 1, name: 'my project' }, {id: 2, name: 'my new project' }]
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockProjects)
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = fetchAllProjects()
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch', async () => {
    const thunk = fetchAllProjects()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalled()
  });

  it.skip('dispatches setProjects action', async () => {
    const thunk = fetchAllProjects();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setProjects(mockProjects))
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = fetchAllProjects()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = fetchAllProjects()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});