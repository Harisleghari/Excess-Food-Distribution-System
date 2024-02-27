import React, { useState, useEffect } from 'react';

const GeolocationComponent = () => {
  const [accepterLocation, setAccepterLocation] = useState({
    latitude: null,
    longitude: null,
    loading: true,
    error: null
  });

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

  return (
    <div>
      {accepterLocation.loading ? (
        <p>Loading...</p>
      ) : accepterLocation.error ? (
        <p>{accepterLocation.error}</p>
      ) : (
        <p>
          Accepter's Location: {accepterLocation.latitude},{' '}
          {accepterLocation.longitude}
        </p>
      )}
    </div>
  );
};

export default GeolocationComponent;
