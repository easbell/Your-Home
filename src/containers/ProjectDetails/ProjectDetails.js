import React from 'react';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer'

class ProjectDetails extends React.Component {

  render() {
    const { name, address, city, description, end_date, rooms, start_date, state, zip_code } = this.props.project
    
    return (
      <div>
        <div className='project-details'>
          <h2>{name}</h2>
          {/* <p>{address}, {city}, {state}, {zip_code}</p> */}
          <p>{address}</p>
          <p>{description}</p>
          {/* <p><span>{start_date}</span> to <span>{end_date}</span></p> */}
        </div>
        <RoomsContainer rooms={rooms}/>
      </div>
    )
  }
}

export default ProjectDetails;