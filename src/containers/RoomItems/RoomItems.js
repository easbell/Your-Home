import React from 'react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class RoomItems extends React.Component {
  state = { expanded: false};

  renderMaterialTypes = () => {
    return this.props.materials.map(material => {
      return
    })
  }

  renderMaterials = () => {

  }

  render() {
    console.log(this.props)
    return (
      <Collapse onChange={callback}>
        <Panel header="Fixtures" key="1">
          <p>X2 Doorknobs <button>edit</button></p>
          <p>X6 hinges</p>
        </Panel>
        <Panel header="Flooring" key="2">
          <p>100 sq ft tile</p>
        </Panel>
        <Panel header="Walls" key="3">
          <p>2 gallons grey paint</p>
        </Panel>
      </Collapse>
    );
  }
}

export default RoomItems;