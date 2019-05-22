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

 // make method to dynamically make items in the dataSource array within List

  render() {
    return (
      <div>
        <List
          dataSource={[
            {
              name: 'Bedroom',
              description: 'Upstairs bedroom',
            },
            {
              name: 'Kitchen',
              description: 'Full kitchen',
            },
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
          <RoomItems />
        </Drawer>
      </div>
    );
  }
}


export default Room;