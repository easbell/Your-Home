import React from 'react';
import { Drawer, List } from 'antd';
import RoomItems from '../../containers/RoomItems/RoomItems'

class Room extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { name, type, description, roomMaterials } = this.props
    return (
      <div className='room'>
        <List
          dataSource={[
            {
              name: name,
              description: description,
            }
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Materials</a>]}>
              <List.Item.Meta
                title={item.name}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <RoomItems type={type}
                     materials={roomMaterials}
          />
        </Drawer>
      </div>
    );
  }
}


export default Room;