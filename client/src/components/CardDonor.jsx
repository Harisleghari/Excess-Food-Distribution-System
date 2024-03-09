/* eslint-disable no-template-curly-in-string */

import "./carddonor.css";
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios'

const CardDonor = (props) => {
  const authToken = localStorage.getItem('token');
  console.log(authToken)
  const handleDelete = async (num) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/food/delete/" + num,
        {
          headers: {
            Authorization: `Bearer ${authToken}` // Include JWT token in the Authorization header
          }
        }
      );

      if (response.status === 200) {
        // localStorage.setItem('token', response.data.token)
        window.location.reload();
      } else {
        // Handle registration failure, e.g., display an error message.
        console.error('failed to delete');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      {props.initialPosts.map((items, index) => {

        return (
          <li aria-label="Listing" key={items.id} className="doner flex-direction: row-reverse;">
            <div className="d-flex">

              <Card className='card-d'>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                  <Card.Title><div className="d-flex justify-content-between">
                    <div>{items.food}</div>
                    <button className="text-end" onClick={() => {
                      handleDelete(items.id)
                    }}><FaTrashAlt /></button>
                  </div> </Card.Title>
                  <Card.Text>
                    <div className='card-inner d-flex justify-content-between align-items-center'>
                      <p><CiLocationOn />{items.pickup}</p>
                      <p>{items.prefTime}</p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </li>
        );
      })}

    </>
  );
};

export default CardDonor;
