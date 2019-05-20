import isLoading from '../isLoading';
import * as actions from '../../actions';

describe('isLoading', () => {
  it('should return state by default', () => {
    const expected = false;
    const result = isLoading(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a boolean if the action type is IS_LOADING', () => {
    const mockBool = true;
    const mockAction = actions.isLoading(mockBool);
    const result = isLoading(undefined, mockAction);
    expect(result).toEqual(mockBool);
  });
});