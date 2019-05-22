import React from 'react';
import { Collapse } from 'antd';
import RoomItems from '../../containers/RoomItems/RoomItems'

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const Room = ({projId, roomId}) => {
  return (
    <Collapse onChange={callback}>
      <Panel header="BedRoom" key="1">
        <RoomItems />
      </Panel>
    </Collapse>
  )
}

export default Room;