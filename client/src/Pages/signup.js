import './signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Card,Form } from 'react-bootstrap';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        console.log('Registration successful');
        console.log(response)
      } else {
        // Handle registration failure, e.g., display an error message.
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="signup">
      <Card className="sign-c">
        <Card.Body>
          <Card.Title className="login-t">
            <h1>Sign Up</h1>
          </Card.Title>
          <Form>
            <Form.Group className="set">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="set">
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="set">
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="Sign-b">
              <button className="btn" onClick={handleSignup}>
                Sign Up
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
