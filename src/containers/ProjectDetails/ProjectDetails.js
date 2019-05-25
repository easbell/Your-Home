import React from 'react';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer'
import EditProject from '../EditProject/EditProject';

class ProjectDetails extends React.Component {

  render() {
    const { name, address, city, description, end_date, rooms, start_date, state, zip_code } = this.props.project
    
    return (
      <div>
        <div className='project-page'>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{description}</p>
          <div className='edit-project-btn'><EditProject /></div>
          <button className='add-room-btn'>Add New Room</button>
        </div>
        <RoomsContainer rooms={rooms}/>
      </div>
    )
  }
}

export default ProjectDetails;