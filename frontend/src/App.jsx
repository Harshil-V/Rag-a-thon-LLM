import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LandingPageURL from './pages/LandingPageURL';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/url" element={<LandingPageURL />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
