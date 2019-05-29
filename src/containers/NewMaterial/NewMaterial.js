import React from 'react';
import { connect } from 'react-redux'
import { addNewMaterial} from '../../thunks/addNewMaterial';
import { addMaterialHelper } from '../../utils/addMaterialHelper';
import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, onChange } = this.props;
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
              })(<Input onChange={onChange} name='name' />)}
            </Form.Item>
            <Form.Item label="Type">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: 'Please input the type of the material!' }],
              })(<Input onChange={onChange} name='type' />)}
            </Form.Item>
            <Form.Item label="Brand">
              {getFieldDecorator('brand', {
                rules: [{ required: true, message: 'Please input the brand of the material!' }],
              })(<Input onChange={onChange} name='brand' />)}
            </Form.Item>
            <Form.Item label="Model">
              {getFieldDecorator('model', {
                rules: [{ required: true, message: 'Please input the model number of the material!' }],
              })(<Input onChange={onChange} name='model' />)}
            </Form.Item>
            <Form.Item label="Vendor">
              {getFieldDecorator('vendor', {
                rules: [{ required: true, message: 'Please input where the material was purchased!' }],
              })(<Input onChange={onChange} name='vendor' />)}
            </Form.Item>
            <Form.Item label="Quantity">
              {getFieldDecorator('quantity', {
                rules: [{ required: true, message: 'Please input how many of this item was purchased!' }],
              })(<Input onChange={onChange} name='quantity' />)}
            </Form.Item>
            <Form.Item label="Price">
              {getFieldDecorator('price', {
                rules: [{ required: true, message: 'Please input the price of the material!' }],
              })(<Input onChange={onChange} name='price' />)}
            </Form.Item>
            <Form.Item label="Manual URL">
              {getFieldDecorator('manual', {
                rules: [{ required: false, message: 'Please input the price of the material!' }],
              })(<Input onChange={onChange} name='manual' />)}
            </Form.Item>
            <Form.Item label="Notes">
              {getFieldDecorator('notes')(<Input onChange={onChange} name='notes' type="textarea" />)}
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
  state = { 
    visible: false,
    name: '',
    type: '',
    brand: '',
    model: '',
    vendor: '',
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

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCreate = () => {
    const { roomId } = this.props
    const { name, type, brand, model, vendor, quantity, price, manual, notes } = this.state;
    const newMaterial = { name, type, brand, model, vendor, quantity, price, manual, notes };
    console.log(newMaterial)
    const body = addMaterialHelper(newMaterial, roomId)
    // this.props.addNewMaterial(body)
    this.setState({ visible: false, name: '', type: '', brand: '', model: '', vendor: '', quantity: '', price: '', manual: '', notes: '' });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add New Material
        </Button>
        <CollectionCreateForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addNewMaterial: (material) => dispatch(addNewMaterial(material)),
})

export default connect(null, mapDispatchToProps)(NewMaterial);