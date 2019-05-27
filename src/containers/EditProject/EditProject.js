import React from 'react';
import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, editProject } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Project Details"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false }],
              })(<Input onChange={editProject} name='name' placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Address">
              {getFieldDecorator('address', {
                rules: [{ required: false }],
              })(<Input onChange={editProject} name='address' placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input onChange={editProject} name='description' type="textarea" placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class EditProject extends React.Component {
  state = { 
    visible: false,
    name: '',
    address: '',
    description: ''
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  editProject = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const { name, address, description } = this.state;
    const updatedProject = { name, address, description };
    console.log(updatedProject);
    this.setState({ visible: false});
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <i className="fas fa-pen"></i>
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          editProject={this.editProject}
        />
      </div>
    );
  }
}

export default EditProject;