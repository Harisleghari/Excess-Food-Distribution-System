/* eslint-disable no-template-curly-in-string */
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';

const AccepterListing = (props) => {
    return (
        <>
            {props.initialPosts.map((items, index) => {
                return (
                    <li aria-label="Listing" key={items._id} className="doner flex-direction: column-reverse;">
                        <div className="d-flex">
                            <Link to={`/list/${items._id}`}>
                                <Card className='card-d'>
                                    {/* <Card.Img variant="top" src={items.image} /> */}
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

export default AccepterListing;
