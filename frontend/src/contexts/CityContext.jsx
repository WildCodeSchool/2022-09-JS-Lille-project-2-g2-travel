import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";

const SearchContext = createContext({
  setDbValue: null,
  setLng: null,
  setLat: null,
  currentCity: "",
  coords: [],
  pointsOfInterest: [], // à compléter
});
export default SearchContext;

export function SearchContextProvider({ children }) {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [dbValue, setDbValue] = useState("Lille");
  const [center, setCenter] = useState([46.274999232266616, 2.55287666291033]);
  const [pointsOfInterest, setPointsOfInterest] = useState([]);

  const context = useMemo(
    () => ({
      setDbValue,
      setLon,
      setLat,
      currentCity: dbValue,
      coords: center,
      pointsOfInterest,
    }),
    [dbValue, center, pointsOfInterest]
  );

  useEffect(() => {
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/geoname?name=${dbValue}&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setLat(data.lat);
        setLon(data.lon);
      });
  }, [dbValue]);

  useEffect(() => {
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=${lon}&lat=${lat}&limit=5&kinds=foods&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setPointsOfInterest(data.features);
      });
  }, [center]);

  useEffect(() => {
    setCenter([lat, lon]);
  }, [lat, lon]);

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
}

SearchContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
