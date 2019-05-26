import React from 'react';
import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
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
                rules: [{ required: false, message: 'Please input the type of room!' }],
              })(<Input placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false, message: 'Please input the name of the room!' }],
              })(<Input placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class EditRoom extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div className="edit-room-btn">
        <Button onClick={this.showModal} size="small" type="link">
        <i className="fas fa-pen"></i>
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default EditRoom;