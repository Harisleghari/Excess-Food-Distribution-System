import './acceptVolunteer.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import LoadMore from "../components/LoadMore";
import { slice } from "lodash";
// import CardDonor from '../components/CardDonor';
import VolunteerListing from '../components/VolunteerListing';



const Accept = () => {

  // const [value, setValue] = useState("");
  const [accepterLocation, setAccepterLocation] = useState({
    latitude: null,
    longitude: null,
    loading: true,
    error: null
  });
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

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setAccepterLocation({
            latitude,
            longitude,
            loading: false,
            error: null
          });
        },
        (error) => {
          setAccepterLocation({
            latitude: null,
            longitude: null,
            loading: false,
            error: "Geolocation error: " + error.message
          });
        }
      );
    } else {
      setAccepterLocation({
        latitude: null,
        longitude: null,
        loading: false,
        error: "Geolocation is not supported by this browser."
      });
    }
  };

  // Call getLocation when the component mounts
  useEffect(() => {
    getLocation();
  }, []);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const handleBtn = async () => {
    try {
      const nearestPost = await axios.post("http://localhost:5000/api/volunteer/nearestVolunteer", {
        "accepterLongitude": accepterLocation.longitude,
        "accepterLatitude": accepterLocation.latitude

      })
      if (nearestPost.status === 200) {
        setPost(nearestPost.data)
        console.log(nearestPost.data);
      }
      else {
        console.error('failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <>
      <div className="a-1">
        <div className="a-1-1">
          <h1>
            <b>Find Volunteer</b>
          </h1>
          <p>
            Looking for assistance in finding Volunteer? EFDS can help. We
            work with a variety of food donors and volunteers to connect those
            in need with fresh, nutritious meals.
            <br />
            Don't let hunger get in the way of living a healthy, active
            lifestyle. Get started with EFDS today and find the Volunteer
            you need.
          </p>
        </div>
        <div className="a-1-2">
          <button className="a-1-2-btn-1">
            <b>Find Volunteer</b>
          </button>
          {/* <button className="a-1-2-btn-2">
            <b>Volunteer</b>
          </button> */}
        </div>
        <div className="a-1-3">
          <h3>Search Options</h3>
          <h3>Need Help Finding the Volunteer</h3>
          {/* <div className="a-1-3-1">
            <input
              type="number"
              placeholder=""
              value={value}
              onChange={handleChange}
            />
            <p>km</p>
          </div> */}
          <div className="a-1-3-2 mt-3">
            <button className="a-1-3-btn-1" onClick={handleBtn}>
              <b>Seacrh</b>
            </button>
          </div>
        </div>
        <div>
          <div>
            <ul className="d-flex flex-wrap">
              <VolunteerListing initialPosts={initialPosts} />
            </ul>

          </div>
          <div className='b'>
            {post.length > 0 && <LoadMore isCompleted={isCompleted} loadMore={loadMore} />}

          </div>
        </div>
      </div>
    </>
  );
}

export default Accept;