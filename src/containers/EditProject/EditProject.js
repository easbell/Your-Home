import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { editProjectThunk } from '../../thunks/editProjectThunk';
import { connect } from 'react-redux';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, editProject, name, address, description } = this.props;
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
            <Form.Item label="Edit only the items that need updating" className='sub-title'>
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false }],
              })(<Input onChange={editProject} name='name' placeholder={name} />)}
            </Form.Item>
            <Form.Item label="Address">
              {getFieldDecorator('address', {
                rules: [{ required: false }],
              })(<Input onChange={editProject} name='address' placeholder={address} />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input onChange={editProject} name='description' type="textarea" placeholder={description} />)}
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
    const { id } = this.props;
    let allItems = {
      name: this.props.name,
      address: this.props.address,
      description: this.props.description
    }
    Object.keys(allItems).forEach(item => {
      if(this.state[item].length > 0) {
        allItems[item] = this.state[item]
      }
    })
    this.props.editProjectThunk(id, allItems.name, allItems.address, allItems.description);
    this.setState({ visible: false});
  }

  render() {
    const {name, address, description } = this.props;
    return (
      <div>
        <Button type="primary" className='header-btn' onClick={this.showModal}>
          Edit Project <i className="project-edit fas fa-pen"></i>
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          editProject={this.editProject}
          name={name}
          address={address}
          description={description}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  editProjectThunk: (id, name, address, description) => dispatch(editProjectThunk(id, name, address, description))
})

export default connect(null, mapDispatchToProps)(EditProject);