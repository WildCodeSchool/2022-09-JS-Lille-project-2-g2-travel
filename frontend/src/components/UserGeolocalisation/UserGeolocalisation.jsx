import "./UserGeolocalisation.css";
import { useContext } from "react";
import SearchContext from "../../contexts/CityContext";

function UserGeolocalisation() {
  const { setLat, setLon } = useContext(SearchContext);
  const geolocationAPI = navigator.geolocation;

  const getUserCoordinates = () => {
    geolocationAPI.getCurrentPosition(
      (position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLon(coords.longitude);
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
    </div>
  );
}

export default UserGeolocalisation;
