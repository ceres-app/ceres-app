import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <h2>CERES</h2>
      <Link to="/bomb-control">Ir para controle de bomba</Link>
    </div>
  );
};

export default HomeView;
