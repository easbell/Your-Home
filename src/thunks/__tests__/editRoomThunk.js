import { editRoomThunk } from '../editRoomThunk';
import { isLoading, hasErrored } from '../../actions';

describe('editRoomThunk', () => {
  let mockProject;
  let mockDispatch;
  
  beforeEach(() => {
    mockProject = {data: {data: {updateProject: {name: 'my room' }}}}
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockProject)
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = editRoomThunk()
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch', async () => {
    const thunk = editRoomThunk()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalled()
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = editRoomThunk()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = editRoomThunk()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});