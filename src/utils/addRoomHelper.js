export const addRoomHelper = (room, state) => {
  let newState = []
  state.forEach(project => {
    if(project.id === room.project.id) {
      project.rooms.push(room)
      newState.push(project)
    } else {
      newState.push(project)
    }
  })
  return newState
}

export const deleteRoomHelper = (id, projectId, state) => {
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
  return newState
}

// export const editRoomHelper = (id, projectId, state) => {
//   console.log(id, projectId, state)
  // let newState = []
  // state.forEach(project => {
  //   if(project.id === projectId) {
  //     let editedRooms = project.rooms.filter(room => room.id !== id)
  //     project.rooms = editedRooms
  //     newState.push(project)
  //   } else {
  //     newState.push(project)
  //   }
  // })
  // return newState
// }