// eslint-disable-next-line import/no-unresolved
import "./reset.css";
// eslint-disable-next-line import/no-unresolved, import/extensions
import Carousel from "./frontend/src/components/Carousel/Carousel";
import "./activities.css";

const Restaurants = [
  {
    TypeName: "Indian Food",
  },
  {
    TypeName: "Italians",
  },
  {
    TypeName: "Fast-Food",
  },
  {
    TypeName: "Bakery",
  },
  {
    TypeName: "Pubs",
  },
];

const Museums = [
  {
    TypeName: "The Louvre – Paris, France",
  },
  {
    TypeName: "National Museum of China – Beijing, China",
  },
  {
    TypeName: "Vatican Museums – Vatican City",
  },
  {
    TypeName: "The Metropolitan Museum of Art – New York, USA",
  },
  {
    TypeName: "British Museum – London, UK",
  },
];

const Park = [
  {
    TypeName: "The Louvre – Paris, France",
  },
  {
    TypeName: "National Museum of China – Beijing, China",
  },
  {
    TypeName: "Vatican Museums – Vatican City",
  },
  {
    TypeName: "The Metropolitan Museum of Art – New York, USA",
  },
  {
    TypeName: "British Museum – London, UK",
  },
];

function App() {
  return (
    <div className="SwiperContainer">
      <div className="Restaurants">
        <h1 className="Title">Restaurants</h1>
        <Carousel Restaurants={Restaurants} />
        <div className="Museums">
          <h1 className="Title">Museums</h1>
          <Carousel Museums={Museums} />
          <div className="Park">
            <h1 className="Title">Park</h1>
            <Carousel Park={Park} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
