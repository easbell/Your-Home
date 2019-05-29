const materials = (state = {}, action) => {
  switch(action.type) {
    case 'SET_MATERIALS':
      return action.materials
    case 'ADD_MATERIAL':
      return [...state, action.material]
    default:
      return state
  }
}

export default materials;