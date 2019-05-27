import React from 'react';
import { Button, Modal, Form, Input } from 'antd';

export const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, editMaterial } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Material"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='name' placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Brand">
              {getFieldDecorator('brand', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='brand' placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Model">
              {getFieldDecorator('model', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='model'  placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Vendor">
              {getFieldDecorator('vendor', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='vendor'  placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Quantity">
              {getFieldDecorator('quantity', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='quantity'  placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Price">
              {getFieldDecorator('price', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='price'  placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Manual URL">
              {getFieldDecorator('manual', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='manual'  placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item label="Notes">
              {getFieldDecorator('notes')(<Input onChange={editMaterial} name='notes' type="textarea" placeholder='Update here, or leave blank to keep unchanged' />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class EditMaterial extends React.Component {
  state = { 
    visible: false,
    name: '',
    brand: '',
    vendor: '',
    model: '',
    quantity: '',
    price: '',
    manual: '',
    notes: ''
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  editMaterial = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCreate = () => {
    const { name, brand, vendor, model, quantity, price, manual, notes } = this.state;
    const updatedMaterials = { name, brand, vendor, model, quantity, price, manual, notes };
    console.log(updatedMaterials);
    this.setState({ visible: false});
  }

  render() {
    return (
      <div className="edit-material-btn">
        <Button onClick={this.showModal} size="small" type="link">
          <i className="fas fa-pen"></i>
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          editMaterial={this.editMaterial}
        />
      </div>
    );
  }
}

export default EditMaterial;