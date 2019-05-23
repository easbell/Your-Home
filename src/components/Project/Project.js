import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.png';

const Project = (props) => {
  const { id, name, address } = props
  return (
    <Link to={`/projects/${id}`}>
      <div className='project'>
        <img src={homeIcon} className='home' alt='home-icon'/>
        <h2>{name}</h2>
        {address}
      </div>
    </Link>
  )
}

export default Project;