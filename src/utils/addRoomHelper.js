export const addRoomHelper = (room, state) => {
  console.log(room.project.id)
  console.log(state)
  let newState = []
  state.forEach(project => {
    if(project.id === room.project.id) {
      project.rooms.push(room)
      newState.push(project)
    } else {
      newState.push(project)
    }
  })
  console.log('new state', newState)
  return newState
}

export const deleteRoomHelper = (id, projectId, state) => {
  console.log(id, projectId, state)
  let newState = []
  state.forEach(project => {
    if(project.id === projectId) {
      let editedRooms = project.rooms.filter(room => room.id !== id)
      project.rooms = editedRooms
      newState.push(project)
    } else {
      newState.push(project)
    }
  })
  console.log('newState', newState)
  return newState
}