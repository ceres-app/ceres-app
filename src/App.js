import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BombControlView from './containers/BombControl/BombControlView';
import HomeView from './containers/Home/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/bomb-control" element={<BombControlView />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
