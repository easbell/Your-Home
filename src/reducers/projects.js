import { addRoomHelper, deleteRoomHelper } from '../utils/addRoomHelper';

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
      state = state.filter(project => project.id !== action.project.id)
      return [...state, action.project]
    case 'DELETE_ROOM':
      state = deleteRoomHelper(action.id, action.projectId, state)
      return state
    default:
      return state
  }
}

export default projects;