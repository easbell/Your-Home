import React from 'react';
import { connect } from 'react-redux';
import { Drawer, List, Button } from 'antd';
import Materials from '../../containers/Materials/Materials';
import EditRoom from '../../containers/EditRoom/EditRoom';
import { fetchRoomMaterials } from '../../thunks/fetchRoomMaterials';
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm';

export class Room extends React.Component {
  state = { visible: false };

  showDrawer = async () => {
    const { id } = this.props
    await this.props.fetchRoomMaterials(id)
    this.setState({ visible: true });
  }

  onClose = () => {
    this.setState({ visible: false });
  }

  render() {
    const { name, type, description, materials } = this.props;
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
            <List.Item key={item.id} className='room-item'actions={[
              <Button type='link' onClick={this.showDrawer}>View Materials</Button>,
              <EditRoom {...this.props}/>,
              <DeleteConfirm type="room" id={item.id} />
            ]}>
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
          <Materials type={type}
                     materials={materials}
          />
        </Drawer>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchRoomMaterials: (materials) => dispatch(fetchRoomMaterials(materials))
});

export const mapStateToProps = state => ({
  materials: state.materials
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);