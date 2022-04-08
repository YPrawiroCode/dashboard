import React, { useState, useEffect } from "react";

const axios  = require('axios');
const GetData = (props) => {
  //get data from API
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
    <>
      {repo.map((repos, index ) => (
          <tr key={index}>
            <td>{index + 1 }</td>
            <td>{repos.name}</td>
            <td>{repos.email}</td>
          </tr>
      ))}
    </>
  )
}

export default GetData;