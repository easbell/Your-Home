import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { deleteProject, deleteRoom } from '../../thunks/fetchAllProjects';
import { connect } from 'react-redux';

export class DeleteConfirm extends Component {
  
  showConfirm(type, id, deleteProject, projectId, deleteRoom) {
    const confirm = Modal.confirm;
    confirm({
      title: 'Are you sure you want to delete this item and all contents within?',
      content: 'Click OK to confirm deletion.',
      onOk() {
        if(type === 'project') {
          deleteProject(id)
        }
        if(type === 'room') {
          deleteRoom(id, projectId)
        }
      },
      onCancel() {},
    });
  }

  render() {
    const {id, type, deleteProject, projectId, deleteRoom} = this.props
    return (
      <Button onClick={() => this.showConfirm(type, id, deleteProject, projectId, deleteRoom)} className='confirm-btn' type="link">
        <i className="fas fa-trash-alt"></i>
      </Button>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  deleteProject: (id) => dispatch(deleteProject(id)),
  deleteRoom: (id, projectId) => dispatch(deleteRoom(id, projectId))
})

export const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirm);