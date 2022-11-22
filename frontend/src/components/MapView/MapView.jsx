import { PropTypes } from "prop-types";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function MapView({ coords }) {
  const map = useMap();

  useEffect(() => {
    map.setView(coords, map.getZoom());
  }, [coords]);
}

MapView.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number),
};

MapView.defaultProps = {
  coords: [],
};
