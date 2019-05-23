import { combineReducers } from 'redux';
import hasErrored from './hasErrored';
import isLoading from './isLoading';
import projects from './projects';

const rootReducer = combineReducers({
  hasErrored,
  isLoading,
  projects
})

export default rootReducer;