import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { deleteProject } from '../../thunks/fetchAllProjects';
import { connect } from 'react-redux';

export class DeleteConfirm extends Component {
  
  showConfirm(type, id, deleteProject) {
    const confirm = Modal.confirm;
    confirm({
      title: 'Are you sure you want to delete this item and all contents within?',
      content: 'Click OK to confirm deletion.',
      onOk() {
        deleteProject(id)
      },
      onCancel() {},
    });
  }

  render() {
    const {id, type, deleteProject} = this.props
    return (
      <Button onClick={() => this.showConfirm(type, id, deleteProject)} className='confirm-btn' type="link">
        <i className="fas fa-trash-alt"></i>
      </Button>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  deleteProject: (id) => dispatch(deleteProject(id))
})

export const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirm);