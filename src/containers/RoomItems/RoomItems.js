import React from 'react';
import { Collapse } from 'antd';
import NewMaterial from '../NewMaterial/NewMaterial';
import EditMaterial from '../EditMaterial/EditMaterial';

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
              <EditMaterial />
              <button className='delete-material-btn'><i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        )
    })
  }

  render() {
    return (
      <div>
        <div>
          <Collapse onChange={callback}>
            {this.renderMaterialTypes()}
          </Collapse>
        </div>
        <div className='add-material-btn'>
          <NewMaterial />
        </div>
      </div>
    );
  }
}

export default RoomItems;