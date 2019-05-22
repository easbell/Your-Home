import React from 'react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class Room extends React.Component {
  state = { expanded: false};

  // method for Panel creation
  // maybe if we append categories where a user has added no materials, it appends
  // <Panel header="Walls" key="3" disabled></Panel>

  // method for <p> with text creation, one for each material of a category

  render() {
    return (
      <Collapse defaultActiveKey={['1']} onChange={callback}>
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

export default Room;