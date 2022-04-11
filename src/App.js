import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage'
import Mobil from './pages/Mobil'
import PhotoBooth from './pages/PhotoBooth'
import Games from './pages/Games'
import Login from './pages/Login';
import WithoutNav from './components/Layout/WithoutNav';
import WithNav from './components/Layout/WithNav';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route exact path='/login' element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/visitor' element={ <Dashboard />} />
            <Route exact path='/visitor/mobil' element={<Mobil />} />
            <Route exact path='/visitor/photobooth' element={<PhotoBooth />} />
            <Route exact path='/visitor/games' element={<Games />} />
            <Route exact path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
