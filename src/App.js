import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage'
import Mobil from './pages/Mobil'
import PhotoBooth from './pages/PhotoBooth'
import Games from './pages/Games'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/visitor' element={ <Dashboard />} />
            <Route path='/visitor/mobil' element={<Mobil />} />
            <Route path='/visitor/photobooth' element={<PhotoBooth />} />
            <Route path='/visitor/games' element={<Games />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
