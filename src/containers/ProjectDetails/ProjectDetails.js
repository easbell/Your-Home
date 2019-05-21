import React from 'react';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer'

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='project-details'>
          <h2>Project Name</h2>
          <p>Details gathered from props</p>
        </div>
        <RoomsContainer />
      </div>
    )
  }
}

export default ProjectDetails;