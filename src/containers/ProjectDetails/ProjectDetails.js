import React from 'react';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';
import NewRoom from '../NewRoom/NewRoom';
import EditProject from '../EditProject/EditProject';

class ProjectDetails extends React.Component {

  render() {
    const { name, address, description, rooms } = this.props.project;
    
    return (
      <div>
        <div className='project-page'>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{description}</p>
          <div className='edit-project-btn'>
            <EditProject />
          </div>
          <div className='add-room-btn'>
            <NewRoom />
          </div>
        </div>
        <RoomsContainer rooms={rooms}/>
      </div>
    );
  }
}

export default ProjectDetails;