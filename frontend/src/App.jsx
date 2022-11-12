import "./reset.css";
import CTA from "./components/CTA/CTA";
import Carousel from "./components/Carousel/Carousel";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Mapping from "./components/Mapping/Mapping";

const pointsOfInterest = [
  {
    id: 1,
    name: "Les Sales Momes",
    description:
      "Les Sales Mômes c'est un lieu unique où on te sert de bonnes bières artisanales, des gros burgers préparés maison le midi, des pâtisseries gourmandes réalisées sur place pour le goûter, des planches savoureuses et variées pour l'apéro, et où tu peux en plus découvrir des centaines de jeux de société.",
    position: [50.629164093615074, 3.021646713124781],
    category: "Bar",
  },
  {
    id: 2,
    name: "Le Barboteur",
    description:
      "À deux pas d’Euratechnologie et du centre ville de Lille, le restaurant Le Barboteur vous accueille au coeur du quartier des Bois Blancs.",
    position: [50.629306889542534, 3.021532266904478],
    category: "Restaurant",
  },
  {
    id: 3,
    name: "La CAV",
    description:
      "Un plaisir à tous points de vue. La légende dit que l'alcool coule des robinets....",
    position: [50.63396558254144, 3.0390737104311962],
    category: "Boite de nuit",
  },
  {
    id: 4,
    name: "Al Carbone",
    description:
      "AL'CARBONE vous propose d'entrer dans l'univers de la mafia et de déguster, à volonté, 6 carbonades différentes aux noms de crimes qui peuvent varier au fil des saisons.",
    position: [50.63331366636824, 3.010240203264459],
    category: "Restaurant",
  },
  {
    id: 5,
    name: "Wild Code School",
    description: "Je dev, je feignasse",
    position: [50.633122195418935, 3.0187578441046417],
    category: "Tech School",
  },
];

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

function App() {
  return (
    <div className="Swiper">
      <h1 className="cityTitle">Cities</h1>
      <Carousel europeanCities={europeanCities} />
      <div className="App">
        <Header />
        <CTA />
        <Card
          Title="Card Title"
          ImageUrl="cdn.pixabay.com/photo/2022/09/30/10/05/river-7489170_1280.jpg"
          Body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi recusandae, sed quidem quod, in, iure assumenda quis maxime voluptatibus nemo quo inventore non ea deleniti? Nobis aperiam quae ea."
        />
        <div className="map">
          <Mapping
            pointsOfInterest={pointsOfInterest}
            center={[50.629306889542534, 3.021532266904478]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
