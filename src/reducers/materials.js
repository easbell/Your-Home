const materials = (state = {}, action) => {
  switch(action.type) {
    case 'SET_MATERIALS':
      return action.materials
    case 'ADD_MATERIAL':
      const type = action.material.element_type
      const { id, name, brand, model_number, unit_price, vendor, quantity, manual_url, notes } = action.material.material
      const newMaterial = {
        id: id,
        name: name,
        brand: brand,
        model_number: model_number,
        unit_price: unit_price,
        vendor: vendor,
        quantity: quantity,
        manual_url: manual_url,
        notes: notes,
      }
      if (state[type]) {
        state[type] = [...state[type], newMaterial]
        return state
      } else {
        state[type] = [newMaterial]
        return state
      }
    case 'EDIT_MATERIAL':
      console.log(material)
    default:
      return state
  }
}

export default materials;