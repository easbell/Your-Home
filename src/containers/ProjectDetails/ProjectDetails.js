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
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{description}</p>
          <div className='edit-project-btn'>
            <EditProject name={name} address={address} description={description}/>
          </div>
          <div className='add-room-btn'>
            <NewRoom id={id} />
          </div>
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