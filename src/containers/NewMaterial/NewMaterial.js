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
          title="Add a Material"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the name of the material!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Brand">
              {getFieldDecorator('brand', {
                rules: [{ required: true, message: 'Please input the brand of the material!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Model">
              {getFieldDecorator('model', {
                rules: [{ required: true, message: 'Please input the model number of the material!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Vendor">
              {getFieldDecorator('vendor', {
                rules: [{ required: true, message: 'Please input where the material was purchased!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Quantity">
              {getFieldDecorator('quantity', {
                rules: [{ required: true, message: 'Please input how many of this item was purchased!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Price">
              {getFieldDecorator('price', {
                rules: [{ required: true, message: 'Please input the price of the material!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Manual URL">
              {getFieldDecorator('manual', {
                rules: [{ required: false, message: 'Please input the price of the material!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Notes">
              {getFieldDecorator('notes')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class NewMaterial extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

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
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add New Material
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

export default NewMaterial;