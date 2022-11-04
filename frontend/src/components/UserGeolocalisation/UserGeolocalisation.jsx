import "./UserGeolocalisation.css";
import { useState } from "react";

function UserGeolocalisation() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const geolocationAPI = navigator.geolocation;

  const getUserCoordinates = () => {
    geolocationAPI.getCurrentPosition(
      (position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      },
      () => {
        console.error("We are not allowed to locate you!");
      }
    );
  };

  return (
    <div className="Geolocation">
      <button type="button" id="geoloc" onClick={getUserCoordinates}>
        Get my position
      </button>
      <h1>Your coordinates are: {[lat, long]}</h1>
    </div>
  );
}

export default UserGeolocalisation;
