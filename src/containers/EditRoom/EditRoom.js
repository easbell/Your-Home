import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { editRoomThunk } from '../../thunks/editRoomThunk';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { connect } from 'react-redux';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, editRoom, name, type, description } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Room"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Edit only the items that need updating" className='sub-title'>
            </Form.Item>
            <Form.Item label="Type">
              {getFieldDecorator('type', {
                rules: [{ required: false }],
              })(<Input onChange={editRoom} name='type' placeholder={type} />)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false }],
              })(<Input onChange={editRoom} name='name' placeholder={name} />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input onChange={editRoom} name='description' type="textarea" placeholder={description} />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export class EditRoom extends React.Component {
  state = { 
    visible: false,
    type: '',
    name: '',
    description: ''
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  editRoom = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCreate = async () => {
    const { id } = this.props;
    let allItems = {
      name: this.props.name,
      type: this.props.type,
      description: this.props.description
    }
    Object.keys(allItems).forEach(item => {
      if(this.state[item].length > 0) {
        allItems[item] = this.state[item]
      }
    })
    await this.props.editRoomThunk(id, allItems.name, allItems.type, allItems.description);
    this.props.fetchAllProjects();
    this.setState({ visible: false});
  }

  render() {
    return (
      <div className="edit-room-btn">
        <Button onClick={this.showModal} size="small" type="link">
          <i className="fas fa-pen"></i>
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          editRoom={this.editRoom}
          name={this.props.name}
          type={this.props.type}
          description={this.props.description}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  editRoomThunk: (id, name, address, description) => dispatch(editRoomThunk(id, name, address, description)),
  fetchAllProjects: () => dispatch(fetchAllProjects())
})

export default connect(null, mapDispatchToProps)(EditRoom);