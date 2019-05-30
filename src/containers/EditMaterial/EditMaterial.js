import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, Form, Input } from 'antd';
import { editMaterialHelper } from '../../utils/materialHelpers';
import { fetchEditMaterial } from '../../thunks/fetchEditMaterial';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, editMaterial } = this.props;
      const { brand, manual_url, type, model_number, name, notes, quantity, unit_price, vendor} = this.props.materials;
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
            <Form.Item label="Edit only the items that need updating" className='sub-title'>
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='name' placeholder={name} />)}
            </Form.Item>
            <Form.Item label="Type">
              {getFieldDecorator('type', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='type' placeholder={type} />)}
            </Form.Item>
            <Form.Item label="Brand">
              {getFieldDecorator('brand', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='brand' placeholder={brand} />)}
            </Form.Item>
            <Form.Item label="Model">
              {getFieldDecorator('model', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='model'  placeholder={model_number} />)}
            </Form.Item>
            <Form.Item label="Vendor">
              {getFieldDecorator('vendor', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='vendor'  placeholder={vendor} />)}
            </Form.Item>
            <Form.Item label="Quantity">
              {getFieldDecorator('quantity', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='quantity'  placeholder={quantity} />)}
            </Form.Item>
            <Form.Item label="Price">
              {getFieldDecorator('price', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='price'  placeholder={unit_price} />)}
            </Form.Item>
            <Form.Item label="Manual URL">
              {getFieldDecorator('manual', {
                rules: [{ required: false }],
              })(<Input onChange={editMaterial} name='manual'  placeholder={manual_url} />)}
            </Form.Item>
            <Form.Item label="Notes">
              {getFieldDecorator('notes')(<Input onChange={editMaterial} name='notes' type="textarea" placeholder={notes} />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export class EditMaterial extends React.Component {
  state = { 
    visible: false,
    name: '',
    type: '',
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

  handleCreate = async () => {
    const { id } = this.props.roomMaterials[0];
    let items = [ 'name', 'type', 'brand', 'vendor', 'model', 'quantity', 'price', 'manual', 'notes' ]
    let allItems = {
      name: this.props.name,
      type: this.props.type,
      brand: this.props.brand,
      vendor: this.props.vendor,
      model: this.props.model_number,
      quantity: this.props.quantity,
      price: this.props.unit_price,
      manual: this.props.manual_url,
      notes: this.props.notes,
      roomMaterials: this.props.roomMaterials
    }

    items.forEach(item => {
      if (this.state[item].length > 0) {
        allItems[item] = this.state[item]
      }
    })
    const oldMaterialType = this.props.type
    let body = editMaterialHelper(allItems, id);
    await this.props.fetchEditMaterial({body: body, oldType: oldMaterialType});
    this.setState({ visible: false, name: '', type: '', brand: '', vendor: '', model: '', quantity: '', price: '', manual: '', notes: '' });
    this.props.forceRender();
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
          materials={this.props}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchEditMaterial: (material) => dispatch(fetchEditMaterial(material)),
})

export default connect(null, mapDispatchToProps)(EditMaterial);