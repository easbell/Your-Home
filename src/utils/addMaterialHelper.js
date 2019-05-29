export const addMaterialHelper = (material, id) => {
  console.log(material, id)

  // let rooms = roomBuilder(project.rooms);
  // return {"query": `mutation { createProject (project: {name: "${project.name}", description: "${project.description}", address: "${project.address}"}, rooms: [${rooms}]) {id name description address rooms {id name type}}}`}
}

// const roomBuilder = (rooms) => {
//   let roomString = ``
//   let allRooms = []
//   rooms.forEach(room => {
//     roomString += `{name: "${room.name}", type: "${room.type}"}, `
//   })
//   allRooms.push(roomString)
//   return allRooms;
// }


// { "query":"mutation{addRoomMaterial(room_id: 1, element_type: \"Flooring\", material: {name: \"new material\", vendor: \"some company\"}) {id element_type room{id name} material{id name vendor quantity}}}"
// }