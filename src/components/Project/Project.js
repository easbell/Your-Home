import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.png';
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm';

const Project = (props) => {
  const { id, name, address, description, rooms } = props;
  return (
    <div className='container'>
      <Link to={`/projects/${id}`}>
        <div className='project'>
          <div className='project-head'>
            <img src={homeIcon} className='home' alt='home-icon'/>
            <h2>{name}</h2>
          </div>
          <div className='project-description'>
            <p>{address}</p>
            <p>{description}</p>
            <p>{rooms.length} Rooms</p>
          </div>
        </div>
      </Link>
      <div className='project-delete'>
        <DeleteConfirm type="project"/>
      </div>
    </div>
  );
}

export default Project;