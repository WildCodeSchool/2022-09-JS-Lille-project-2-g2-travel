/* eslint-disable import/no-unresolved, import/extensions */
import "./reset.css";
import Carousel from "./frontend/src/components/Carousel/Carousel";
import "./activities.css";
/* eslint-enable import/no-unresolved, import/extensions */

const restaurants = [
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

const museums = [
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

const parks = [
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
        <Carousel restaurants={restaurants} />
        <div className="Museums">
          <h1 className="Title">Museums</h1>
          <Carousel museums={museums} />
          <div className="Park">
            <h1 className="Title">Park</h1>
            <Carousel parks={parks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
