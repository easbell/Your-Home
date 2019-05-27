import React from 'react';
import { Modal, Button, Tabs } from 'antd';

class MaterialDetails extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  renderDetails = () => {
    const TabPane = Tabs.TabPane;
    const { brand, manual_url, model_number, name, notes, quantity, unit_price, vendor } = this.props;
    return(
      <Tabs defaultActiveKey="1">
        <TabPane tab="General" key="1">
          <p>Name: {name}</p>
          <p>Brand: {brand}</p>
          <p>Quantity: {quantity}</p>
          {manual_url && 
            <p>Link to manual: {manual_url}</p>
          }
        </TabPane>
        <TabPane tab="Product Details" key="2">
          <p>Model Number: {model_number}</p>
          <p>Vendor: {vendor}</p>
          <p>Price: {unit_price}</p>
        </TabPane>
        <TabPane tab="Notes" key="3">
          <p>Notes: {notes}</p>
        </TabPane>
      </Tabs>
    );
  }

  render() {
    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          View Details
        </Button>
        <Modal
          title={this.props.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            {this.renderDetails()}
          </div>
        </Modal>
      </div>
    );
  }
}

export default MaterialDetails;