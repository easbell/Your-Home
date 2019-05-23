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
    return this.props.materials.map((material, i) => {
      if (material.element_type === type) {
        const { brand, manual_url, model_number, name, notes, quantity, unit_price, vendor } = material.material
        return(
          <p key={i}>{name}, {brand} <button>edit</button></p>
        )
      }
    })
  }

  render() {
    return (
      <Collapse onChange={callback}>
        {this.renderMaterialTypes()}
      </Collapse>
    );
  }
}

export default RoomItems;