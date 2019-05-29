import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { addNewRoom } from '../../thunks/addNewRoom';
import { connect } from 'react-redux';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, newRoom } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a Room"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Type">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: 'Please input the type of room!' }],
              })(<Input onChange={newRoom} name='type'/>)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the name of the room!' }],
              })(<Input onChange={newRoom} name='name'/>)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input onChange={newRoom} name='description' type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export class NewRoom extends React.Component {
  state = { 
    visible: false,
    type: '',
    name: '',
    description: '' 
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  newRoom = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const { name, type, description } = this.state;
    const { id } = this.props;
    this.props.addNewRoom(id, name, description, type);
    this.setState({ visible: false});
  }

  render() {
    return (
      <div>
        <Button type="primary" className='header-btn' onClick={this.showModal}>
          Create New Room
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          newRoom={this.newRoom}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addNewRoom: (id, name, description, type) => dispatch(addNewRoom(id, name, description, type))
});

export default connect(null, mapDispatchToProps)(NewRoom);