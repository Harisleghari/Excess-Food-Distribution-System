import './donatedActivity';
import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import axios from "axios";
import LoadMore from "../components/LoadMore";
// import Card from 'react-bootstrap/Card';
// import doner1 from '../assets/doner-1.png';
// import doner2 from '../assets/doner-2.png';
// import doner3 from '../assets/doner-3.png';
// import { CiLocationOn } from 'react-icons/ci';
// import Button from '../components/button';
import CardDonor from '../components/CardDonor';



const DonatedActivity = () => {
    const [post, setPost] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(3);
    const initialPosts = slice(post, 0, index);
    const loadMore = () => {
        setIndex(index + 3);
        console.log(index);
        if (index >= post.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };
    useEffect(() => {
        const authToken = localStorage.getItem('token');
        axios.get("http://localhost:5000/api/user/getFoods",{
            headers: {
                Authorization: `Bearer ${authToken}` // Include JWT token in the Authorization header
            }
        })
            .then((response) => {
                setPost(response.data);
                console.log(response.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <div className='don'>
                <div className='doner-t'>
                    <h1><b>Donated Activity</b></h1>
                </div>
                {/* <div className='doner'>
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
                </div> */}
            </div>
            <div>
                <ul className="d-flex flex-wrap">
                    <CardDonor initialPosts={initialPosts} />
                </ul>

            </div>
            <div className='b'>
                {/* <Button text={['Show More ...', '#']} /> */}
                <LoadMore isCompleted={isCompleted} loadMore={loadMore} />
            </div>
        </>
    )
}

export default DonatedActivity;