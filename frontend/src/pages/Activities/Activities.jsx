import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import LogoDesktop from "../../components/LogoDesktop/LogoDesktop";
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
        <h2 className="TitleCarousel">Restaurants</h2>
        <Carousel restaurantsData={restaurants} />
      </div>
      <div className="bars">
        <h2 className="TitleCarousel">Bars</h2>
        <Carousel barsData={bars} />
      </div>
      <div className="museums">
        <h2 className="TitleCarousel">Museums</h2>
        <Carousel museumsData={museums} />
      </div>
      <div className="nightclubs">
        <h2 className="TitleCarousel">Nightclubs</h2>
        <Carousel nightclubsData={nightclubs} />
      </div>
      <div className="parks">
        <h2 className="TitleCarousel">Parks</h2>
        <Carousel parksData={parks} />
      </div>
      <div className="monuments">
        <h2 className="TitleCarousel">Monuments</h2>
        <Carousel monumentsData={monuments} />
      </div>
    </div>
  );
}

export default Activities;
