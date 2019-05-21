import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({name, address, id}) => {
  return (
    <Link to={`/projects/${id}`}>
      <div className='project'>
        <h2>{name}</h2>
        {address}
      </div>
    </Link>
  )
}

export default Project;