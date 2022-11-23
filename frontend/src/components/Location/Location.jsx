import "./location.css";
import { useContext } from "react";
import SearchContext from "../../contexts/CityContext";

export default function Location() {
  const { currentCity } = useContext(SearchContext);
  return (
    <div className="city-country">
      <h1>{currentCity}</h1>
    </div>
  );
}
