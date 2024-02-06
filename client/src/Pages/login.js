import './login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        // Login successful, you can redirect or perform other actions here.
        console.log("Login successful");
        console.log(localStorage.getItem("token"));
        // Execute this code wherever you want to trigger a page reload
        navigate("/");
      } else {
        // Handle login failure, e.g., display an error message.
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="login">
      <Card className="login-c">
        <Card.Body>
          <Card.Title className="login-t">
            <h1>Login</h1>
          </Card.Title>
          <Form>
            <Form.Group className="set">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="set">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="login-b">
              <button className="btn" onClick={handleLogin}>
                Login
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
