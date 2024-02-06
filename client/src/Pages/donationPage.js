import "./donationPage.css";
import donation from '../assets/donation.png';
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const Donation =()=>{

    const [pickup, setPickup] = useState("");
    const [food, setFood] = useState("");
    const [prefTime, setPrefTime] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pic, setPic] = useState([]);

    const createDonation = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/food/create", pic,
          {
            pickup,
            food,
            quantity,
            prefTime,
          }
        );

        if (response.status === 200) {
          // Registration successful, you can redirect or perform other actions here.
          console.log("Registration successful");
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
            <img className="Donate-1-1" src={donation} alt="DonationImage"/>
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
                <Form.Label className="form-label">Upload Image</Form.Label>
                <Form.Control
                  className="form-feild"
                  type="file"
                  onChange={(e) => {
                    const [file] = e.target.files;
                    setPic((pic) => [...pic, file]);
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