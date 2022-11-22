import Header from "@components/Header/Header";
import LogoDesktop from "@components/LogoDesktop/LogoDesktop";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./activities.css";

function Activities() {
  const [restaurants, setRestaurants] = useState([]);
  const [museums, setMuseums] = useState([]);
  const [nightclubs, setNightclubs] = useState([]);
  const [parks, setParks] = useState([]);
  const [monuments, setMonuments] = useState([]);
  const [bars, setBars] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=3.05858&lat=50.63297&kinds=restaurants&format=json&limit=10&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )

      .then(({ data }) => {
        setRestaurants(data);
      });
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=3.05858&lat=50.63297&kinds=museums&format=json&limit=10&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setMuseums(data);
      });
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=3.05858&lat=50.63297&kinds=nightclubs&format=json&limit=10&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setNightclubs(data);
      });
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=3.05858&lat=50.63297&kinds=natural&format=json&limit=10&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setParks(data);
      });
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=3.05858&lat=50.63297&kinds=monuments&format=json&limit=10&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )
      .then(({ data }) => {
        setMonuments(data);
      });
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=3.05858&lat=50.63297&kinds=bars&format=json&limit=10&apikey=${
          import.meta.env.VITE_APIKEY
        }`
      )

      .then(({ data }) => {
        setBars(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <LogoDesktop />
      <div className="restaurants">
        <Carousel restaurantsData={restaurants} />
      </div>
      <div className="bars">
        <Carousel barsData={bars} />
      </div>
      <div className="museums">
        <Carousel museumsData={museums} />
      </div>
      <div className="nightclubs">
        <Carousel nightclubsData={nightclubs} />
      </div>
      <div className="parks">
        <Carousel parksData={parks} />
      </div>
      <div className="monuments">
        <Carousel monumentsData={monuments} />
      </div>
    </div>
  );
}

export default Activities;
