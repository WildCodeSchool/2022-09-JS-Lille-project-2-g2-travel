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

  async function sleep(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  async function callApi(poi) {
    return axios.get(
      `https://api.opentripmap.com/0.1/en/places/xid/${poi}?apikey=${
        import.meta.env.VITE_APIKEY
      }`
    );
  }

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
    const tempArray = [];
    const fetchData = async (xidPOI) => {
      for (let i = 0; i < xidPOI.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const { data } = await callApi(xidPOI[i]);
        tempArray.push({
          ...data,
          id: data.xid,
          geometry: { coordinates: [data.point.lon, data.point.lat] },
        });
        setPointsOfInterest([...tempArray]);
        // eslint-disable-next-line no-await-in-loop
        await sleep(400);
      }
    };
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=${lon}&lat=${lat}&limit=20&kinds=restaurants%2Cbars%2Ccafes%2Ccultural%2Cnightclubs&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setPointsOfInterest(data.features);
        const xidPOI = data.features.map((pointOfInterest) => {
          const arrayPOI = [];
          arrayPOI.push(pointOfInterest.properties.xid);
          return arrayPOI;
        });
        fetchData(xidPOI);
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
