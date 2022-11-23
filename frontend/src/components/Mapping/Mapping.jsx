import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PropTypes } from "prop-types";
import L from "leaflet";
import MapView from "../MapView/MapView";
import "./Mapping.css";
import "leaflet/dist/leaflet.css";
import icon from "../../assets/iconTravel.png";

export default function Mapping({ pointsOfInterest, center }) {
  const iconTravel = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: [12, 41],
    popupAnchor: [-4, -47],
    shadowUrl: icon,
    shadowSize: new L.Point(23, 37),
    shadowAnchor: [12, 41],
    iconSize: new L.Point(23, 37),
  });

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom
      style={{
        height: "32rem",
        borderRadius: "1rem",
        minWidth: "60%",
        zIndex: 1,
      }}
    >
      <MapView coords={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={iconTravel}>
        <Popup>
          <h1>Your Position</h1>
        </Popup>
      </Marker>
      {pointsOfInterest
        .filter((pointOfInterest) => pointOfInterest.name !== "")
        .map((pointOfInterest) => {
          const [lat, lng] = pointOfInterest.geometry.coordinates;
          return (
            <Marker
              key={pointOfInterest.id}
              position={[lng, lat]}
              icon={iconTravel}
            >
              <Popup>
                <h1>{pointOfInterest.name}</h1>
                <sub>To fill</sub>
                <p>To fill</p>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}

Mapping.propTypes = {
  pointsOfInterest: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      geometry: PropTypes.shape({
        type: PropTypes.string,
        coordinates: PropTypes.arrayOf(PropTypes.number),
      }),
      properties: PropTypes.shape({
        name: PropTypes.string,
        dist: PropTypes.number,
      }),
    })
  ),
  center: PropTypes.arrayOf(PropTypes.number),
};

Mapping.defaultProps = {
  pointsOfInterest: [],
  center: [],
};
