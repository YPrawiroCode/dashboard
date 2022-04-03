import React from "react";
import Header from '../components/Header';
import Body from '../components/Body'
import './Dashboard.css'

const Dashboard = (props) =>{
  return(
    <div className="dashboard">
        <Header />
        <Body />
    </div>
  )
}

export default Dashboard;