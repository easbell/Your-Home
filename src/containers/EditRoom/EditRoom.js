import React from 'react';
import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, editRoom } = this.props;
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
            <Form.Item label="Type">
              {getFieldDecorator('type', {
                rules: [{ required: false }],
              })(<Input onChange={editRoom} name='type' placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false }],
              })(<Input onChange={editRoom} name='name' placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input onChange={editRoom} name='description' type="textarea" placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class EditRoom extends React.Component {
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

  handleCreate = () => {
    const { name, type, description } = this.state;
    const updatedProject = { name, type, description };
    console.log(updatedProject);
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
        />
      </div>
    );
  }
}

export default EditRoom;