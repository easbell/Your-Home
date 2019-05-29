import { addNewMaterial } from './addNewMaterial';
import { isLoading, addMaterial, hasErrored } from '../actions';

describe('addNewMaterial', () => {
  let mockProject;
  let mockDispatch;
  
  beforeEach(() => {
    mockProject = {createMaterial: {name: 'my project' }}
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMaterial)
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = addNewMaterial()
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch', async () => {
    const thunk = addNewMaterial()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalled()
  });

  it.skip('dispatches setMaterial action', async () => {
    const thunk = addNewMaterial();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addProject(mockMaterial))
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = addNewMaterial()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  });

  it.skip('should dispatch isLoading(false) if the response is ok', async () => {
    // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //   ok: true,
    //   statusText: 'Something went wrong'
    // }))
    
    const thunk = addNewMaterial()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});