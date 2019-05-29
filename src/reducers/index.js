import { combineReducers } from 'redux';
import hasErrored from './hasErrored';
import isLoading from './isLoading';
import projects from './projects';
import materials from './materials'

const rootReducer = combineReducers({
  hasErrored,
  isLoading,
  projects,
  materials
})

export default rootReducer;