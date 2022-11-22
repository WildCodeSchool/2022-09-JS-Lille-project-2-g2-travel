import "./location.css";
// import { PropTypes } from "prop-types";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function Location() {
  return (
    <div className="city-country">
      <h1>Lille</h1>
      <h2>France</h2>
    </div>
  );
}

// // export default function Location() {
// //   const [location, setLocation] = useState("");
// //   useEffect(() => {
// //     axios
// //       .get(
// //         `https://api.opentripmap.com/0.1/en/places/geoname?name=${location}&apikey=5ae2e3f221c38a28845f05b68cde73439c2e803dfd3bb7501b78d084`
// //       )
// //       .then(({ data }) => {
// //         setLocation(data.name);
// //       });
// //   }, []);
// //   return <div>{location} </div>;
// // }
// Location.propTypes = {
//   cities: PropTypes.string.isRequired,
// };
