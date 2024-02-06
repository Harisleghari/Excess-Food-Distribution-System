import './volunteer.css'
import Card from 'react-bootstrap/Card';
import vol1 from '../assets/vol-1.png';
import vol2 from '../assets/vol-2.png';
import vol3 from '../assets/vol-3.png';
import vol4 from '../assets/vol-4.png';


const Volunteer = ()=>{
    return(
        <>
            <div className='vol-h'>
                <h1><b>Our Volunteers</b></h1>
                <p>Join us as a volunteer and help us in our mission to reduce food waste and feed those in need.</p>
            </div>
            <div className='vol-1'>
                <Card className='card-vol'>
                    <Card.Img variant="top" src={vol1} />
                    <Card.Body>
                        <Card.Title><b>Sarah Ahmed</b></Card.Title>
                        <Card.Text>
                            Sarah is a college student who is passionate about fighting hunger and food waste. She volunteers with Rizq Bachao on weekends and helps with food distribution events in her community.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-vol'>
                    <Card.Img variant="top" src={vol2} />
                    <Card.Body>
                        <Card.Title><b>Muhammad Ali</b></Card.Title>
                        <Card.Text>
                            Muhammad is a retired teacher who volunteers with Rizq Bachao to give back to his community. He helps with fundraising events and manages social media for the organization.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-vol'>
                    <Card.Img variant="top" src={vol3} />
                    <Card.Body>
                        <Card.Title><b>Ayesha Khan</b></Card.Title>
                        <Card.Text>
                            Ayesha is a stay-at-home mom who volunteers with Rizq Bachao in her free time. She helps with food drives and coordinates with local restaurants and grocery stores to collect excess food donations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-vol'>
                    <Card.Img variant="top" src={vol4} />
                    <Card.Body>
                        <Card.Title><b>Hassan Malik</b></Card.Title>
                        <Card.Text>
                            Hassan is a software engineer who is passionate about using technology to solve social problems. He volunteers with Rizq Bachao and helps with the development of the organization's website.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Volunteer;