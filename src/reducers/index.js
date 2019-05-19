import { combineReducers } from 'redux';
import hasErrored from './hasErrored';

const rootReducer = combineReducers({
  hasErrored
})

export default rootReducer;