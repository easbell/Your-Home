import { addNewRoom } from '../addNewRoom';
import { isLoading, hasErrored } from '../../actions';

describe('addNewRoom', () => {
  let mockRoom;
  let mockDispatch;
  
  beforeEach(() => {
    mockRoom = {data: {data: {addProjectRoom: {name: 'my room' }}}}
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockRoom)
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = addNewRoom()
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch', async () => {
    const thunk = addNewRoom()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalled()
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = addNewRoom()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = addNewRoom()
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});