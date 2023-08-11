import React, { useState } from 'react';
import { sendDeviceRequest } from '../../services/api';
import BombControlView from './BombControlView';

const BombControlContainer = () => {
  const [isDeviceOn, setIsDeviceOn] = useState(false);

  const handleDeviceToggle = async () => {
    const newState = !isDeviceOn;
    setIsDeviceOn(newState);

    try {
      await sendDeviceRequest(newState ? 'on' : 'off');
      console.log(`Device turned ${newState ? 'on' : 'off'}`);
    } catch (error) {
      console.error('Error sending device request:', error);
    }
  };

  return <BombControlView isDeviceOn={isDeviceOn} handleDeviceToggle={handleDeviceToggle} />;
};

export default BombControlContainer;
