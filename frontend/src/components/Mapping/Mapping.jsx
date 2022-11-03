// eslint-disable-next-line import/no-unresolved
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PropTypes } from "prop-types";
import "./Mapping.css";
// eslint-disable-next-line import/no-unresolved
import "leaflet/dist/leaflet.css";

export default function Mapping({ pointsOfInterest, center }) {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom
      style={{ height: "500px", width: "500px", borderRadius: "3%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pointsOfInterest.map((pointOfInterest) => {
        return (
          <Marker key={pointOfInterest.id} position={pointOfInterest.position}>
            <Popup>
              <h1>{pointOfInterest.name}</h1>
              <sub>{pointOfInterest.category}</sub>
              <p>{pointOfInterest.description}</p>
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
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      position: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  center: PropTypes.arrayOf(PropTypes.number),
};

Mapping.defaultProps = {
  pointsOfInterest: [],
  center: [],
};
