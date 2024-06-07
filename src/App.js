import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>  

        <Route path="/" element={<HomePage/>} /> 
        <Route path="/results" element={<ResultsPage/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
