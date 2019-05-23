import React, { Component } from 'react';
import Room from '../Room/Room'

export class RoomsContainer extends Component {
  
  renderRooms = () => {
    return this.props.rooms.map((room, i) => {
      return <Room key={i} {...room}/>
    });
  }

  render() {
    return (
      <div className='rooms'>
        {this.renderRooms()}
      </div>
    )
  }
}

export default RoomsContainer;