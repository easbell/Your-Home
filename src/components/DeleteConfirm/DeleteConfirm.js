import React, { Component } from 'react';
import { Modal, Button } from 'antd';

const confirm = Modal.confirm;

class DeleteConfirm extends Component {
  showConfirm = (type) => {
    confirm({
      title: 'Are you sure you want to delete this item and all contents within?',
      content: 'Click OK to confirm deletion.',
      onOk() {
        console.log('Delete complete')
        console.log('delete type', type)
        // return new Promise((resolve, reject) => {
        //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        // }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  render() {
    return(
      <Button onClick={() => this.showConfirm(this.props.type)} type="link"><i className="fas fa-trash-alt"></i></Button>
    )
  }
}

export default DeleteConfirm;