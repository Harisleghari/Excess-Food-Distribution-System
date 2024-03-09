/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listbodypart.css";
import Map from "./Map"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Button from "../components/button";
import { Vortex } from 'react-loader-spinner'


const ListBodyPart = (props) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 31.4834,
    lng: 74.3969
  })

  const [phoneNumber, setPhoneNumber] = useState()
  const postDate = new Date(props.detailList.date);

  // Get the Id param from the URL.
  const { id } = useParams();
  const product = id;
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/food/" + product)
      .then((response) => {
        setSelectedLocation(
          {
            lat: response.data.food.location.coordinates[1],
            lng: response.data.food.location.coordinates[0]
          }
        )
        setPhoneNumber(response.data.food.phone)
        setIsLoading((isLoading = false));
      })
      .catch((e) => console.log(e));
  }, [product]);

  const handleWhatsAppClick = () => {
    // Generate WhatsApp message link
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Redirect user to WhatsApp
    // window.location.href = whatsappLink;
    window.open(whatsappLink, '_blank');
  };

  const handleCopyLink = () => {
    // Copy post link to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert("Post link copied to clipboard!");
  };
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
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12" height="200px">
            <img
              src={props.detailList.image}
              className="d-block w-100"
              alt="..."
              height="100%"
              width="100%"
            />
          </div>

          {/*row 2/ right-Side*/}
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 " width="500px">
            <div className="row m-2">
              <div className="border p-4 w-100 rounded">
                <div className="d-flex justify-content-between">
                  <div>
                    <b>
                      <span className="fw-bold box8">
                        Description
                      </span>
                    </b>
                  </div>
                  <div>
                    <span>
                      <button className="mt-3" onClick={handleCopyLink}>Copy</button>
                    </span>
                  </div>

                </div>
                <p className="text-secondary">{props.detailList.description}</p>
                <p className="text-secondary">
                  <b>Address:</b> {props.detailList.pickup}
                </p>
                <p className="text-secondary">
                  <b>Food:</b> {props.detailList.food}
                </p>
                <p className="text-secondary">
                  <b>Pref Date:</b> {postDate.toLocaleDateString()}
                </p>
                <p className="text-secondary">
                  <b>Pref Time:</b> {props.detailList.prefTime}
                </p>

                <button type="submit" className="box" onClick={() => {
                  handleWhatsAppClick()
                }}>
                  <span>Chat with donor</span>
                </button>
                <h3 className="text-center">OR</h3>
                <a href="/acceptVolunteer">
                  <button type="submit" className="box">
                    <span>Find Volunteer</span>
                  </button>
                </a>

                {/* <Button className="text-center" text={["Join as Volunteer", '/volunteerForm']} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Section 2/ Detailes Section*/}
      <div className="container-fluid">
        <div className="row m-3">
          <div>
            <Map selectedLocation={selectedLocation} />
          </div>
        </div>
      </div>
    </div>
            )}
    </>
    
  );
};

export default ListBodyPart;
