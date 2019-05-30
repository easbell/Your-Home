const materials = (state = {}, action) => {
  switch(action.type) {
    case 'SET_MATERIALS':
      return action.materials
    case 'ADD_MATERIAL':
      let { id, name, brand, model_number, unit_price, vendor, quantity, manual_url, notes, roomMaterials } = action.material.material
      let type = action.material.element_type
      const newMaterial = {
        id,
        name,
        brand,
        model_number,
        unit_price,
        vendor,
        quantity,
        manual_url,
        notes,
        roomMaterials: [{ id: action.material.id, element_type: action.material.element_type }]

      }
      if (state[type]) {
        state[type] = [...state[type], newMaterial]
        return state
      } else {
        state[type] = [newMaterial]
        return state
      }
    case 'EDIT_MATERIAL':
      let oldType = action.oldType
      let newType = action.material.element_type
      const updatedMaterial = {
        id: action.material.material.id,
        name: action.material.material.name,
        brand: action.material.material.brand,
        model_number: action.material.material.model_number,
        unit_price: action.material.material.unit_price,
        vendor: action.material.material.vendor,
        quantity: action.material.material.quantity,
        manual_url: action.material.material.manual_url,
        notes: action.material.material.notes,
        roomMaterials: [{ id: action.material.id, element_type: action.material.element_type }]
      }

      if (oldType === newType) {
        let oldMaterial = state[newType].find(material => material.id === updatedMaterial.id)
        let i = state[newType].indexOf(oldMaterial)
        state[newType].splice(i, 1, updatedMaterial)
        return state
      } else {
        let oldMaterial = state[oldType].find(material => material.id === updatedMaterial.id)
        let i = state[oldType].indexOf(oldMaterial)
        state[oldType].splice(i, 1)
        if (!state[newType]) {
          state[newType] = [updatedMaterial]
          return state
        } else {
          state[newType] = [...state[newType], updatedMaterial]
          return state
        }
      }
    default:
      return state
  }
}

export default materials;