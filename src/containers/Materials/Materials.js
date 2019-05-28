import React from 'react';
import { Collapse } from 'antd';
import NewMaterial from '../NewMaterial/NewMaterial';
import Material from '../Material/Material';

class Materials extends React.Component {
  state = { expanded: false };

  renderMaterialTypes = () => {
    const { materials } = this.props
    const types = Object.keys(materials)
    
    return types.map((type, i) => {
      const Panel = Collapse.Panel;
      return(
        <Panel header={type} key={i}>
          {this.renderMaterials(type)}
        </Panel>
      )
    })
  }

  renderMaterials = (type) => {
    const { materials } = this.props
    return materials[type].map((material, i) => {
      return(
        <Material {...material} key={i} />
      )
    });
  }

  render() {
    return (
      <div>
        <div>
          <Collapse>
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