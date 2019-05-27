import React from 'react';
import { Collapse } from 'antd';
import NewMaterial from '../NewMaterial/NewMaterial';
import Material from '../Material/Material';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class Materials extends React.Component {
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
        return(
          <Material {...material} key={i} />
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

export default Materials;