import React from 'react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class RoomItems extends React.Component {
  state = { expanded: false };

  renderMaterialTypes = () => {
    let allCategories = []
    this.props.materials.forEach(material => {
      if (!allCategories.includes(material.element_type)) {
        allCategories.push(material.element_type)
      }
    })

    return allCategories.map((category, i) => {
      return(
        <Panel header={category} key={i}>
          {this.renderMaterials(category)}
        </Panel>
      )
    })
  }

  renderMaterials = (type) => {
    let materials = this.props.materials.filter(material => (material.element_type === type))
    return materials.map((material, i) => {
      const { brand, manual_url, model_number, name, notes, quantity, unit_price, vendor } = material.material
        return(
          <div key={i} className='material'>
            <p>{name}, {brand}</p>
            <div className='material-control'>
              <button className='edit-material-btn'><i class="fas fa-pen"></i></button>
              <button className='delete-material-btn'><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        )
    })
  }

  render() {
    return (
      <div>
        <Collapse onChange={callback}>
          {this.renderMaterialTypes()}
        </Collapse>
        <button className='add-material-btn'>Add New Material</button>
      </div>
    );
  }
}

export default RoomItems;