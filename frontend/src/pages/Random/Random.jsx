import Mapping from "../../components/Mapping/Mapping";
import "./Random.css";

export default function Random() {
  return (
    <div className="map-button-control">
      <Mapping center={[50.62616927481529, 3.0447397364350226]} />
      <button type="button" id="random-me-button">
        Random Me!
      </button>
    </div>
  );
}
