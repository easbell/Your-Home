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
    return materials[type].map(material => {
      return(
        <Material {...material} type={type} key={material.id} forceRender={this.forceRender} />
      )
    });
  }

  forceRender = () => {
    this.setState({ expanded: this.state.expanded })
  }

  render() {
    const { roomId } = this.props
    return (
      <div>
        <div>
          <Collapse>
            {this.renderMaterialTypes()}
          </Collapse>
        </div>
        <div className='add-material-btn'>
          <NewMaterial roomId={roomId}
                       forceRender={this.forceRender}
          />
        </div>
      </div>
    );
  }
}

export default Materials;