import React, { Component } from 'react';
import Room from '../Room/Room'

export class RoomsContainer extends Component {
  
  // renderRooms = () => {
  //   return mockProjects.data.map((room, i) => {
  //     return <Room key={i} {...room}/>
  //   });
  // }

  render() {
    return (
      <div className='rooms'>
        <Room />
        {/* {this.renderRooms()} */}
      </div>
    )
  }
}

export default RoomsContainer