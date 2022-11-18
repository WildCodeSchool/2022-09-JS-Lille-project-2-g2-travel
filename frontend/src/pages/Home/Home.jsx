import { useState } from "react";
import voyage from "../../assets/voyages-2.jpg";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css";

export default function Home() {
  const [resultSearch, setResultSearch] = useState("");
  const handleInput = (e) => {
    setResultSearch(e.target.value);
  };
  const europeanCities = [
    {
      img: "https://barcelonesite.fr/images/barcelona_2.jpg",
      cityName: "Barcelona",
    },
    {
      img: "https://www.flycorsair.com/sites/default/files/2022-06/AdobeStock_299134759_Editorial_Use_Only%20Nantes%20compresse.jpg",
      cityName: "Nantes",
    },
    {
      img: "https://www.voyageavecnous.fr/wp-content/uploads/2018/04/Amsterdam-card-ou-holland-pass.jpg",
      cityName: "Amsterdam",
    },
    {
      img: "https://www.wanderlustchloe.com/wp-content/uploads/2020/10/Colosseum-Rome.jpg",
      cityName: "Roma",
    },
    {
      img: "https://th.bing.com/th/id/R.bb2dfe5efb010e87bd4b6c6e580cac6f?rik=TVr5duw1VJoAbA&pid=ImgRaw&r=0",
      cityName: "Lisboa",
    },
    {
      img: "https://www.cityzeum.com/images/guides/default/sept2018/ph_1302.jpg",
      cityName: "Stockholm",
    },
    {
      img: "https://th.bing.com/th/id/R.9cb5947a24e0f0177a387e198a1bc138?rik=isgVnrtplrOBGg&riu=http%3a%2f%2fwww.slate.com%2fcontent%2fdam%2fslate%2farticles%2fnews_and_politics%2froads%2f2016%2f04%2f160414_RK_Berlin.jpg.CROP.promo-xlarge2.jpg&ehk=CpjFM2B40Pl%2b%2b3Lc%2b1JjWo1QWYcOb65Sc1HmES4ErOI%3d&risl=&pid=ImgRaw&r=0",
      cityName: "Berlin",
    },
    {
      img: "https://www.triptipedia.com/tip/img/TmuZxaBzp.jpg",
      cityName: "Prague",
    },
    {
      img: "https://evasion-online.com/image-photo/athenes/Athene_Grece-1.jpg",
      cityName: "Athenes",
    },
    {
      img: "https://images.france.fr/zeaejvyq9bhj/4lykvx2hoI6YksIo0YOiwe/9958cc7c0b4ca3d4efb16b8e7f49fbac/Grand_Place__OTCL_Lille_-_Laurent_Ghesqui__re.jpg",
      cityName: "Lille",
    },
    {
      img: "https://media.routard.com/image/82/3/nyhavn-copenhague.1610823.jpg",
      cityName: "Copenhague",
    },
  ];

  return (
    <div>
      <div className="home">
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
        <Carousel europeanCities={europeanCities} />
      </div>
      <div className="footer-home"> </div>
    </div>
  );
}
