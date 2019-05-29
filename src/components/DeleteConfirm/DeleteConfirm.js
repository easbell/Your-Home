import React, { Component } from 'react';
import { Modal, Button } from 'antd';

// right now, a prop of type is being passed in
// I'd imagine we will also want to pass in an id.

class DeleteConfirm extends Component {

  showConfirm = (type) => {
    const confirm = Modal.confirm;
    confirm({
      title: 'Are you sure you want to delete this item and all contents within?',
      content: 'Click OK to confirm deletion.',
      onOk() {
        console.log('Delete complete')
        console.log('delete type', type)
        //perhaps a switch statement here based on type to inform what delete method to run
      },
      onCancel() {},
    });
  }

  render() {
    return (
      <Button onClick={() => this.showConfirm(this.props.type)} className='confirm-btn' type="link">
        <i className="fas fa-trash-alt"></i>
      </Button>
    );
  }
}

export default DeleteConfirm;