import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.png';

const Project = (props) => {
  const { id, name, address, description, rooms } = props
  return (
    <Link to={`/projects/${id}`}>
      <div className='project'>
        <div className='project-head'>
          <img src={homeIcon} className='home' alt='home-icon'/>
          <h2>{name}</h2>
          <i className="fas fa-trash-alt"></i>
        </div>
        <div className='project-description'>
          <p>{address}</p>
          <p>{description}</p>
          <p>{rooms.length} Rooms</p>
        </div>
      </div>
    </Link>
  )
}

export default Project;