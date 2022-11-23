import Header from "@components/Header/Header";
import LogoDesktop from "@components/LogoDesktop/LogoDesktop";
import { useContext } from "react";
import imgHistorique from "@assets/historique.jpg";
import imgBar from "@assets/bar.jpg";
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
            Title="Historique"
            ImageUrl={imgHistorique}
            Body="L'opéra de Lille"
          />
          <Card
            Title="Restaurant"
            ImageUrl={imgRestau}
            Body="Decouvrez les meilleurs restaurants de Toulouse"
          />
          <Card Title="Bar" ImageUrl={imgBar} Body="Pour débuter une soirée" />
          <Card
            Title="Night Life"
            ImageUrl={imgNightLife}
            Body="Ready to PARTYYYYYY !!!!!!!"
          />
        </div>

        <Mapping pointsOfInterest={pointsOfInterest} center={coords} />
      </div>
    </div>
  );
}
