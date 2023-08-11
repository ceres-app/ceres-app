import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import '../../styles/styles.css';


const BombControlView = ({ isDeviceOn, handleDeviceToggle }) => {
  return (
    <div className="button-container">
      <h2>Controle da Bomba de água</h2>
      <p>Bomba está {isDeviceOn ?  'ligada': 'desligada'}.</p>
      <button className="control-button" onClick={handleDeviceToggle}>
        <FaPowerOff/>
      </button>
    </div>
  );
};

export default BombControlView;
