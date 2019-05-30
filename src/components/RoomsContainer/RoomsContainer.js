import React, { Component } from 'react';
import Room from '../Room/Room';

export class RoomsContainer extends Component {
  
  renderRooms = (projectId) => {
    return this.props.rooms.map((room, i) => {
      return <Room key={i} {...room} projectId={projectId}/>
    });
  }

  render() {
    console.log(this.props)
    const {projectId} = this.props
    return (
      <div className='rooms'>
        {this.renderRooms(projectId)}
      </div>
    );
  }
}

export default RoomsContainer;