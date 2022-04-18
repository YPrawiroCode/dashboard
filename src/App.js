import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { getToken, removeUserSession, setUserSession } from './Utils/Common';
// import axios from 'axios';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage'
import Mobil from './pages/Mobil'
import PhotoBooth from './pages/PhotoBooth'
import Games from './pages/Games'
import Login from './pages/Login';
// import WithoutNav from './components/Layout/WithoutNav';
import WithNav from './components/Layout/WithNav';
// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicaRoute';

function App() {

  const token = localStorage.getItem('token');

  if(!token) {
    return <Login />
  }else{
    
  }

  // const [authLoading, setAuthLoading] = useState(true);

  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }

  //   axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
  //     setUserSession(response.data.token, response.data.user);
  //     setAuthLoading(false);
  //   }).catch(error => {
  //     removeUserSession();
  //     setAuthLoading(false);
  //   });
  // }, []);

  //   if (authLoading && getToken()) {
  //     return <div className="content">Checking Authentication...</div>
  //   }

  return (
    <>
      <Router>
        {/* <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small> */}
        <Routes>
          {/* <Route element={<WithoutNav />}>
            <Route exact path='/login' element={<Login />} />
          </Route> */}
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
