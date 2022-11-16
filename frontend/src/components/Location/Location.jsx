import "./location.css";
import { PropTypes } from "prop-types";

export default function Location({ cities }) {
  return (
    <div className="city-country">
      <h1>{cities.place}</h1>
      <h2>{cities.country}</h2>
    </div>
  );
}

Location.propTypes = {
  cities: PropTypes.string.isRequired,
};
