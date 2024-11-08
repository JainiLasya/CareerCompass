import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CareerPath from './pages/CareerPath';
import SkillsToLearn from './pages/SkillsToLearn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/career-path" element={<CareerPath />} />
        <Route path="/skills" element={<SkillsToLearn />} />
      </Routes>
    </Router>
  );
}

export default App;