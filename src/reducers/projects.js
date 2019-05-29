import { addRoomHelper } from '../utils/addRoomHelper';

const projects = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ROOM':
      state = addRoomHelper(action.room, state)
      return state
    case 'SET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'DELETE_PROJECT':
      return state.filter(project => project.id !== action.id)
    case 'EDIT_PROJECT':
      console.log(action.project)
      state = state.filter(project => project.id !== action.project.id)
      return [...state, action.project]
    default:
      return state
  }
}

export default projects;