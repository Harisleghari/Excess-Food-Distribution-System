import './volunteerForm.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const VolunteerFormPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');


    const handleVolunteerForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/user/register",
                {
                    name: name,
                    email: email,
                    phone: phone,
                    address: address
                }
            );

            if (response.status === 200) {
                console.log('Registration successful');
                console.log(response)
                navigate("/userHome");
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
                        <h1>Volunteer Form</h1>
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
                                type="phone"
                                value={phone}
                                placeholder="Phone"
                                onChange={(e) => setphone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="set">
                            <Form.Control
                                type="text"
                                value={address}
                                placeholder="Address"
                                onChange={(e) => setaddress(e.target.value)}
                            />
                        </Form.Group>
                        <div className="Sign-b">
                            <button className="btn" onClick={handleVolunteerForm}>
                                JOIN
                            </button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default VolunteerFormPage;