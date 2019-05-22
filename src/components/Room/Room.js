import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.png';

const Room = ({projId, roomId}) => {
  return (
    <Link to={`/projects/${projId}/rooms/${roomId}`}>
      <div className='room'>
        <img src={homeIcon} className='home' alt='home-icon'/>
        <h2>Room name</h2>
      </div>
    </Link>
  )
}

export default Room;