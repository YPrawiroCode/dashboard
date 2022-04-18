import React, { useRef, useState} from "react";
// import AuthContext from "../context/AuthProvider";
import './Login.css'
// import axios from '../api/axios';
import Swal from 'sweetalert2'
import '../sweetalert2.scss'
// import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
// import { setUserSession } from '../Utils/Common';

// const LOGIN_URL = '/api/auth/login';

async function loginUser(credentials) {
  return fetch('https://foreatapi.herokuapp.com/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = (props) =>{
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  // const errRef = useRef();
  // const navigate = useNavigate();

  // const [user, setUser] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //       userRef.current.focus();
  //   }, [])

  //   useEffect(() => {
  //       setErrMsg('');
  //   }, [user, pwd])

  // const useFormInput = initialValue => {
  //   const [value, setValue] = useState(initialValue);
   
  //   const handleChange = e => {
  //     setValue(e.target.value);
  //   }
  //   return {
  //     value,
  //     onChange: handleChange
  //   }
  // }

  // const username = useFormInput('');
  // const password = useFormInput('');

  // const handleLogin = () => {
  //   setError(null);
  //   setLoading(true);
  //   axios.post('https://foreatapi.herokuapp.com/api/auth/login', { username: "tes", password: "test" }).then(response => {
  //     setLoading(false);
  //     setUserSession(response.data.token, response.data.user);
  //     console.log("🚀 ~ file: Login.js ~ line 54 ~ axios.post ~ response.data.user", response.data.user)
  //     navigate('/dashboard');
  //   }).catch(error => {
  //     setLoading(false);
  //     if (error.response.status === 401) setError(error.response.data.message);
  //     else setError("Something went wrong. Please try again later.");
  //   });
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //       const response = await axios.post(LOGIN_URL,
  //           JSON.stringify({ user, pwd }),
  //           {
  //               headers: { 'Content-Type': 'application/json' },
  //               withCredentials: true
  //           }
  //       );
  //       // console.log(JSON.stringify(response?.data))
  //       // console.log(JSON.stringify(response));
  //       const accessToken = response?.data?.accessToken;
  //       const roles = response?.data?.roles;
  //       setAuth({ user, pwd, roles, accessToken });
  //       setUser('');
  //       setPwd('');
  //       setSuccess(true);
  //   } catch (err) {
  //       if (!err?.response) {
  //           setErrMsg('No Server Response');
  //       } else if (err.response?.status === 400) {
  //           setErrMsg('Missing Username or Password');
  //       } else if (err.response?.status === 401) {
  //           setErrMsg('Unauthorized');
  //       } else {
  //           setErrMsg('Login Failed');
  //       }
  //       errRef.current.focus();
  //   }
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('token' in response) {
      Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
      .then((value) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/dashboard";
      });
    } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Login',
          text: 'User atau Password Salah',
        })
    }
  }

  return(
    <>
      {/* {success ? ( */}
        {/* <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="/dashboard">Go to Home</a>
            </p>
        </section>
          ) : ( */}
              <section>
                <div className="login">
                  <div className="form-login">
                    <div className="up-txt">
                      <h1 className="txt1">LOGIN</h1>
                    </div>
                    <div className="form-login2"></div>
                    {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="username" placeholder="Enter email" 
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUserName(e.target.value)}
                          // value={user}
                          required
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          // value={pwd}
                          required
                        />
                      </Form.Group>
                      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                      </Form.Group> */}
                      {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
                      <div>
                        <Button variant="primary" type="submit"
                          className="btn-login" 
                          // disabled={loading} 
                        >
                          Login
                          {/* {loading ? 'Loading...' : 'Login'} */}
                        </Button>
                      </div>  
                    </Form>
                  </div>
                </div>
              </section>
            )
      {/* } */}
    </>
  )

}

export default Login;