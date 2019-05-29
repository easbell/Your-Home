export const addMaterialHelper = (material, id) => {
  const { name, type, brand, model, vendor, quantity, price, manual, notes } = material;
  return { "query": `mutation{addRoomMaterial(room_id: "${id}", element_type: "${type}", material: {name: "${name}", brand: "${brand}", model_number: "${model}", quantity: ${quantity}, unit_price: ${price}, manual_url: "${manual}", notes: "${notes}", vendor: "${vendor}"}) {id element_type room{id name} material{id name brand model_number unit_price vendor quantity manual_url notes}}}`}
}

export const editMaterialHelper = (material, id) => {
  const { name, type, brand, model, vendor, quantity, price, manual, notes } = material;
  return { "query":`mutation{updateProjectMaterial(roomMaterial_id: "${id}", element_type: "${type}", material: {name: "${name}", brand: "${brand}", model_number: "${model}", quantity: ${quantity}, unit_price: ${price}, manual_url: "${manual}", notes: "${notes}", vendor: "${vendor}"}) {id element_type room{id name} material{id name brand model_number unit_price vendor quantity manual_url notes}}}`}
}

// { "query":"mutation{updateProjectMaterial(roomMaterial_id: 1, element_type: \"Flooring\", material: {name: \"Updated material\", brand: \"Updated Brand\"}) {id element_type material{name brand vendor manual_url unit_price quantity model_number notes}}}"}