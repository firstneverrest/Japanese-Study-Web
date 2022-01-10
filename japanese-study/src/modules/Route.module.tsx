import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const RouteModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teams">
          <Route path=":teamId" element={<h1>route teamId</h1>} />
          <Route path="new" element={<h1>route new</h1>} />
          <Route index element={<h1>index route</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteModule;
