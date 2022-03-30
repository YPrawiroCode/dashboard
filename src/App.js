import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Visitor from './pages/Visitor';
import NoPage from './pages/NoPage'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/visitor' element={<Visitor />} />
              <Route path='*' element={<NoPage />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
