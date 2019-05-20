import hasErrored from '../hasErrored';
import * as actions from '../../actions';

describe('hasErrored', () => {
  it('should return an empty string by default', () => {
    const expected = ''
    const result = hasErrored(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return a string if the action type is HAS_ERRORED', () => {
    const mockMessage = 'Something went wrong'
    const mockAction = actions.hasErrored(mockMessage)
    const result = hasErrored(undefined, mockAction)
    expect(result).toEqual(mockMessage)
  })
})