// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StadiumList from './Component/StadiumList';
import Home from './Component/Home';
import Histories from './Component/Histories';
import Hotels from './Component/Hotels';
import Traditions from './Component/Traditions';
import PopularPlaces from './Component/PopularPlaces';
import Navbar from './navbar';
import StadiumDetails from './Component/StadiumDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stadiums" element={<StadiumList />} />
          <Route path="/histories" element={<Histories />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/popular-places" element={<PopularPlaces />} />
          <Route path="/stadiums/:id" element={<StadiumDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
