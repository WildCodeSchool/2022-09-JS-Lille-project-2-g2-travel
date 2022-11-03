import "./reset.css";
import Carousel from "./components/Carousel";
import "./App.css";
import Header from "./components/Header/Header";
import CTA from "@components/CTA/CTA";
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

function App() {
  return (
    <div className="Swiper">
      <h1 classNme="cityTitle">Cities</h1>
      <Carousel />
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
  );
}

export default App;
