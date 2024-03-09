/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './donatedActivity';
import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import axios from "axios";
import LoadMore from "../components/LoadMore";
import CardDonor from '../components/CardDonor';
import { Vortex } from 'react-loader-spinner'



const DonatedActivity = () => {
    const [post, setPost] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(3);
    const initialPosts = slice(post, 0, index);
    const loadMore = () => {
        setIndex(index + 3);
        if (index >= post.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };
    let [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const authToken = localStorage.getItem('token');
        console.log(authToken)
        axios.get("http://localhost:5000/api/user/getFoods", {
            headers: {
                Authorization: `Bearer ${authToken}` // Include JWT token in the Authorization header
            }
        })
            .then((response) => {
                console.log("hi im here")
                setPost(response.data);
                setIsLoading((isLoading = false));
            })
            .catch((e) => console.log(e));
    }, []);

    const styles = {
        container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh', // Adjust this value as needed to center vertically
        },
      };

    return (
        <>
            {isLoading ? (
                <div style={styles.container}>
                    <Vortex
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['pink', 'white', 'blue', 'yellow', 'orange', 'purple']}
                    />
                </div>
            ) : (
                <div>
                    <div className='don'>
                        <div className='doner-t'>
                            <h1><b>Donated Activity</b></h1>
                        </div>
                    </div>
                    {
                        post.length > 0 ? <div>
                            <div>
                                <ul className="d-flex flex-wrap">
                                    <CardDonor initialPosts={initialPosts} />
                                </ul>

                            </div>
                            <div className='b'>
                                {post > 0 && <LoadMore isCompleted={isCompleted} loadMore={loadMore} />}

                            </div>
                        </div> : <h3 className='text-center'>No Posts Available</h3>
                    }</div>
            )}



        </>
    )
}

export default DonatedActivity;