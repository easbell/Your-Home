import React from 'react';

const Project = ({name, address}) => {
  return (
    <div className='project'>
      <h2>{name}</h2>
      {address}
    </div>
  )
}

export default Project;