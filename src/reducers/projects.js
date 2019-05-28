const projects = (state = [], action) => {
  switch(action.type) {
    case 'SET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return [...state, action.project]
    default:
      return state
  }
}

export default projects;