/* eslint-disable no-template-curly-in-string */
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from 'react-icons/ci';

const VolunteerListing = (props) => {
    const handleWhatsAppClick = (phone) => {
        // Generate WhatsApp message link
        const whatsappLink = `https://wa.me/${phone}`;

        // Redirect user to WhatsApp
        // window.location.href = whatsappLink;
        window.open(whatsappLink, '_blank');
    };
    return (
        <>
            {props.initialPosts.map((items, index) => {
                return (
                    <li aria-label="Listing" key={items._id} className="doner flex-direction: column-reverse;">
                        <div className="d-flex">
                            <Card className='card-d'>
                                <Card.Body>
                                    <Card.Title>{items.name}</Card.Title>
                                    <Card.Text>
                                        <div className='card-inner d-flex justify-content-between align-items-center'>
                                            <p><CiLocationOn />{items.address}</p>
                                        </div>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className='card-inner d-flex justify-content-between align-items-center'>
                                            <p>{items.available ? "Available" : "Not Available"}</p>
                                        </div>
                                        <button type="submit" className="box" onClick={() => {
                                            handleWhatsAppClick(items.phone)
                                        }}>
                                            <span>Chat with Volunteer</span>
                                        </button>
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

export default VolunteerListing;
