export const addProjectHelper = (project) => {
  let rooms = roomBuilder(project.rooms);
  return {"query": `mutation { createProject (project: {name: "${project.name}", description: "${project.description}", address: "${project.address}"}, rooms: [${rooms}]) {id name description address rooms {id name type}}}`}
}

const roomBuilder = (rooms) => {
  let roomString = ``
  let allRooms = []
  rooms.forEach(room => {
    roomString += `{name: "${room.name}", type: "${room.type}"}, `
  })
  allRooms.push(roomString)
  return allRooms;
}