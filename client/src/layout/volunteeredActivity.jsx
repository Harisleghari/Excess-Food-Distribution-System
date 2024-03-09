import './volunteeredActivity';
import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import axios from "axios";
import LoadMore from "../components/LoadMore";
import CardDonor from '../components/CardDonor';


const VolunteeredActivity = () => {
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
        axios.get("http://localhost:5000/api/user/getFoods", {
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
                    <h1><b>Vlounteered Activity</b></h1>
                </div>
            </div>
            {
                post > 0 ? <div>
                    <div>
                        <ul className="d-flex flex-wrap">
                            <CardDonor initialPosts={initialPosts} />
                        </ul>

                    </div>
                    <div className='b'>
                        {post > 0 && <LoadMore isCompleted={isCompleted} loadMore={loadMore} />}

                    </div>
                </div> : <h3 className='text-center'>No Posts Available</h3>
            }

        </>
    )
}

export default VolunteeredActivity;