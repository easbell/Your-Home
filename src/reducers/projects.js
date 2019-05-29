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
    default:
      return state
  }
}

export default projects;