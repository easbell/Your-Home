import { fetchRoomMaterials } from './fetchRoomMaterials';
import { isLoading, setMaterials, hasErrored } from '../actions';

describe('fetchAllMaterials', () => {
  let mockDispatch;
  let mockMaterials;
  
  beforeEach(() => {
    mockMaterials = { shower: [{id: 3, name: 'white shower'}], sink: [{id: 4, name: 'red sink'}]}
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMaterials)
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = fetchRoomMaterials()
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch', async () => {
    const thunk = fetchRoomMaterials()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalled()
  });

  it.skip('dispatches setMaterials action', async () => {
    const thunk = fetchRoomMaterials();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setMaterials(mockMaterials))
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = fetchRoomMaterials()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = fetchRoomMaterials()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});