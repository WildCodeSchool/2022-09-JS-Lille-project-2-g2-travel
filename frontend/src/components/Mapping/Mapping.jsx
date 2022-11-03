import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PropTypes } from "prop-types";
import "./Mapping.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../../assets/iconTravel.png";

export default function Mapping({ pointsOfInterest, center }) {
  const iconTravel = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: [12, 41],
    popupAnchor: [-4, -47],
    shadowUrl: icon,
    shadowSize: new L.Point(18, 37),
    shadowAnchor: [12, 41],
    iconSize: new L.Point(18, 37),
  });

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
          <Marker
            key={pointOfInterest.id}
            position={pointOfInterest.position}
            icon={iconTravel}
          >
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
