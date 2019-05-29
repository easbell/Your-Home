import React from 'react';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';
import NewRoom from '../NewRoom/NewRoom';
import EditProject from '../EditProject/EditProject';

class ProjectDetails extends React.Component {

  renderDetails = () => {
    const { name, address, description, rooms, id } = this.props.project;
    return(
      <div>
        <div className='project-page'>
          <NewRoom id={id} className='add-room-btn'/>
          <div className='basic'>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{description}</p>
          </div>
          <EditProject className='edit-project-btn' name={name} address={address} description={description}/>
        </div>
        <RoomsContainer rooms={rooms}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.project &&
          <div>
            {this.renderDetails()}
          </div>
        }
      </div>
    );
  }
}

export default ProjectDetails;