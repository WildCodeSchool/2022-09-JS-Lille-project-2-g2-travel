import Header from "@components/Header/Header";
import LogoDesktop from "@components/LogoDesktop/LogoDesktop";
import { useContext } from "react";
import SearchContext from "../../contexts/CityContext";
import Card from "../../components/Card/Card";
import Mapping from "../../components/Mapping/Mapping";
import imgRestau from "../../assets/restaurant.jpg";
import imgNightLife from "../../assets/nightLife.jpg";
import "./Map.css";

export default function Map() {
  const { coords, pointsOfInterest } = useContext(SearchContext);

  return (
    <div>
      <Header />
      <LogoDesktop />
      <div className="main">
        <div className="cards">
          <Card
            Title="Restaurant"
            ImageUrl={imgRestau}
            Body="Decouvrez les meilleurs restaurants de Toulouse"
          />
          <Card
            Title="Night Life"
            ImageUrl={imgNightLife}
            Body="Ready to PARTYYYYYY !!!!!!!"
          />
          <Card
            Title="Restaurant"
            ImageUrl={imgRestau}
            Body="Decouvrez les meilleurs restaurants de Toulouse"
          />
        </div>

        <Mapping
          pointsOfInterest={pointsOfInterest}
          center={[50.629306889542534, 3.021532266904478]}
        />
      </div>

    </div>
  );
}
