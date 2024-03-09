/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./donationPage.css";
import donation from '../assets/donation.png';
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Donation = () => {

  const [pickup, setPickup] = useState("");
  const [food, setFood] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState();
  const [pic, setPic] = useState();

  const navigate = useNavigate();
  const authToken = localStorage.getItem('token');

  const createDonation = async (event) => {
    try {
      // Create a new FormData object
      const formData = new FormData();
        
      // Append form data to the FormData object
      formData.append('pickup', pickup);
      formData.append('food', food);
      formData.append('quantity', quantity);
      formData.append('phone', phone);
      formData.append('prefTime', prefTime);
      formData.append('image', pic); // Assuming 'pic' is the image file
      
      // Send POST request with FormData
      const response = await axios.post(
          "http://localhost:5000/api/food/create",
          formData,
          {
              headers: {
                  'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
                  Authorization: `Bearer ${authToken}` // Include JWT token in the Authorization header
              }
          }
      );

      if (response.status === 200) {
        // Registration successful, you can redirect or perform other actions here.
        console.log("Registration successful");
        navigate("/userHome");
      } else {
        // Handle registration failure, e.g., display an error message.
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="Donate-1">
        <div>
          <img className="Donate-1-1" src={donation} alt="DonationImage" />
        </div>
        <div className="Donate-1-2">
          <Form>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Pickup where?</Form.Label>
              <Form.Control
                className="form-feild"
                type="text"
                placeholder="e.g; .... Town"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Food Item</Form.Label>
              <Form.Control
                className="form-feild"
                type="text"
                value={food}
                placeholder="e.g; Pasta"
                onChange={(e) => setFood(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Preferred Time</Form.Label>
              <Form.Control
                className="form-feild"
                type="time"
                value={prefTime}
                placeholder="12:00 PM"
                onChange={(e) => setPrefTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Quantity (KG) </Form.Label>
              <Form.Control
                className="form-feild"
                type="number"
                value={quantity}
                placeholder="0"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Phone No </Form.Label>
              <Form.Control
                className="form-feild"
                type="number"
                value={phone}
                placeholder="+92 336*******"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Upload Image</Form.Label>
              <Form.Control
                className="form-feild"
                type="file"
                // onChange={(e) => {
                //   const [file] = e.target.files;
                //   setPic((pic) => [...pic, file]);
                // }}
                onChange={e => {
                  setPic(e.target.files[0])
                }}
              />
            </Form.Group>
          </Form>
          <div>
            <button className="form-button" onClick={createDonation}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;