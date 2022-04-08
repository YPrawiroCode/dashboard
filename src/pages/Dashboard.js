import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Body from '../components/Body'
import './Dashboard.css'

const axios  = require('axios');

const Dashboard = (props) =>{
  const [repo, setRepo] = useState([]);
  
  useEffect(() => {
      getRepo();
    }, []);

  const getRepo = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(`${url}`)
      .then((result) => {
        const myRepo = result.data;
        setRepo(myRepo);
      });
  };

  return(
    <div className="dashboard">
        <Header />
        <Body  index={repo.length} />
    </div>
  )
}

export default Dashboard;