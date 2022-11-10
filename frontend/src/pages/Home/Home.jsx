import { useState } from "react";
import Header from "../../components/Header/Header";
import voyage from "../../assets/voyages-2.jpg";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css";

export default function Home() {
  const [resultSearch, setResultSearch] = useState("");
  const handleInput = (e) => {
    setResultSearch(e.target.value);
  };

  return (
    <div className="home">
      <Header />
      <div className="main-home">
        <div className="search">
          <input
            type="search"
            id="search"
            name="search-home"
            placeholder="Quelle destination?"
            value={resultSearch}
            onChange={handleInput}
          />
        </div>
        <img src={voyage} alt="main-img-home" />
      </div>
      <div className="carousel-home">
        <Carousel />
      </div>
      <div className="footer-home"> </div>
    </div>
  );
}
