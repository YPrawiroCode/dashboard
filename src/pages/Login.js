import React, { useEffect, useState } from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

const Login = (props) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    console.log(email, password)
  }

  useEffect(() => {
    if (localStorage.getItem('user-info')){
      navigate('/dashboard')
    }  
  }, [navigate])

  return(
    <div className="login">
      <div className="form-login">
        <h1 className="txt1">LOGIN</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit"
            onClick={login}
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  )

}

export default Login;