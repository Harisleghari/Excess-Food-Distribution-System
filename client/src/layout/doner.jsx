import './doner.css';
import Card from 'react-bootstrap/Card';
import doner1 from '../assets/doner-1.png';
import doner2 from '../assets/doner-2.png';
import doner3 from '../assets/doner-3.png';
import doner4 from '../assets/doner-4.png';
import doner5 from '../assets/doner-5.png';
import doner6 from '../assets/doner-6.png';
import { CiLocationOn } from 'react-icons/ci';
import Button from '../components/button';



const Doner = () => {
    return (
        <>
            <div className='don'>
                <div className='doner-t'>
                    <h1><b>Share Your Food, Share Your Love</b></h1>
                    <p>Nearby Available Food</p>
                </div>
                <div className='doner'>
                    <Card className='card-d'>
                        <Card.Img variant="top" src={doner1} />
                        <Card.Body>
                            <Card.Title>Spring Roll</Card.Title>
                            <Card.Text>
                                <div className='card-inner d-flex justify-content-between align-items-center'>
                                    <p>Hamza</p>
                                    <p><CiLocationOn />1km</p>
                                    <p>30min</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card-d'>
                        <Card.Img variant="top" src={doner2} />
                        <Card.Body>
                            <Card.Title>Mixed Salad</Card.Title>
                            <Card.Text>
                                <div className='card-inner'>
                                    <p>Ahmed</p>
                                    <p><CiLocationOn />0.5km</p>
                                    <p>1h</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card-d'>
                        <Card.Img variant="top" src={doner3} />
                        <Card.Body>
                            <Card.Title>Chowmein</Card.Title>
                            <Card.Text>
                                <div className='card-inner'>
                                    <p>Aqsa</p>
                                    <p><CiLocationOn />2km</p>
                                    <p>2h</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='doner del-1'>
                    <Card className='card-d'>
                        <Card.Img variant="top" src={doner4} />
                        <Card.Body>
                            <Card.Title>Pizza</Card.Title>
                            <Card.Text>
                                <div className='card-inner'>
                                    <p>Eshal</p>
                                    <p><CiLocationOn />1.5km</p>
                                    <p>3h</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card-d'>
                        <Card.Img variant="top" src={doner5} />
                        <Card.Body>
                            <Card.Title>Fish</Card.Title>
                            <Card.Text>
                                <div className='card-inner'>
                                    <p>Aiza</p>
                                    <p><CiLocationOn />1km</p>
                                    <p>3h</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card-d'>
                        <Card.Img variant="top" src={doner6} />
                        <Card.Body>
                            <Card.Title>Barger</Card.Title>
                            <Card.Text>
                                <div className='card-inner'>
                                    <p>Mohsin</p>
                                    <p><CiLocationOn />2km</p>
                                    <p>4h</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='b'>
                <Button text={['Show More ...', '/login']} />
            </div>
        </>
    )
}

export default Doner;