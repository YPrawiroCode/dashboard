import React, { useState } from "react";
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import { setUserSession } from '../Utils/Common';

const Login = (props) =>{
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://foreatapi.herokuapp.com/api/auth/login', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      navigate('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return(
    <>
      <div className="login">
        <div className="form-login">
          <div className="up-txt">
            <h1 className="txt1">LOGIN</h1>
          </div>
          <div className="form-login2"></div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <div>
              <Button variant="primary" type="button"
                onClick={handleLogin} className="btn-login" disabled={loading} 
              >
                {loading ? 'Loading...' : 'Login'}
              </Button>
            </div>  
          </Form>
        </div>
      </div>
    </>
  )

}

export default Login;