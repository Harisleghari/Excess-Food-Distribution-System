/* eslint-disable no-template-curly-in-string */
import "./cardaccepter.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';

const CardAccepter = (props) => {
  return (
    <>
      {props.initialPosts.map((items, index) => {
        return (
          <li aria-label="Listing" key={items.id} className="doner flex-direction: row-reverse;">
            <div className="d-flex">
            <Link to={`/list/${items.id}`}>
              <Card className='card-d'>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                  <Card.Title>{items.food}</Card.Title>
                  <Card.Text>
                    <div className='card-inner d-flex justify-content-between align-items-center'>
                      <p><CiLocationOn />{items.pickup}</p>
                      <p>{items.prefTime}</p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </div>

          </li>
        );
      })}

    </>
  );
};

export default CardAccepter;
