/* eslint-disable no-template-curly-in-string */
import "./carddonor.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';

const CardDonor = (props) => {
  return (
    <>
      {props.initialPosts.map((items, index) => {
        return (
          <li aria-label="Listing" key={items.id} className="doner flex-direction: row-reverse;">
            {/* <article className="main-list-articles">
              <div className="main-list-articles-inside-div">
                <Link to={`/list/${items.id}`} title={items.food}>
                  <div className="main-list-arcticles-anchor-inside-div"></div>
                </Link>
                <picture className="main-list-arcticles-images">
                  <img
                    role="presentation"
                    alt={items.title}
                    title={items.title}
                    aria-label="Cover photo"
                    src={items.image}
                    className="main-list-articles-inside-div-images-1"
                  />
                </picture>
                <div className="main-list-articles-inside-div-images-1-simple main-list-articles-inside-div-images-2-simple"></div>
              </div>
              <div className="main-list-articles-inside-2nd-div">
                <Link to={`/list/${items.id}`} title={items.title}>
                  <div className="main-list-arcticles-anchor-inside-div"></div>
                </Link>
                <div className="main-list-articles-inside-2nd-div-1">
                  <div
                    className="main-list-articles-inside-2nd-div-1-a"
                    aria-label="Title"
                  >
                    {items.food}
                  </div>
                  <div
                    className="main-list-articles-inside-2nd-div-price"
                    aria-label="Price"
                  >
                    <span>Rs {items.price}</span>
                  </div>
                  <Link to={`/list/${items.id}`} title={items.title}>
                    <div className="main-list-arcticles-anchor-inside-div"></div>
                  </Link>
                  
                </div>
                <div className="main-list-articles-inside-2nd-div-2">
                  <div className="main-list-articles-inside-2nd-div-2-a">
                  </div>
                </div>
              </div>
            </article> */}
            <div className="d-flex">
            <Link to={`/list/${items.id}`}>
              <Card className='card-d'>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                  <Card.Title>{items.food}</Card.Title>
                  <Card.Text>
                    <div className='card-inner d-flex justify-content-between align-items-center'>
                      <p><CiLocationOn />{items.pickup}</p>
                      {/* <p><CiLocationOn />1km</p> */}
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

export default CardDonor;
