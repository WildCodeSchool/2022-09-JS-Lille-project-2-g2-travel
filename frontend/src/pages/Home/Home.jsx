import Header from "../../components/Header/Header";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import voyage from "../../assets/voyages-2.jpg";
import Carousel from "../../components/Carousel";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main-home">
        <div className="search">
          <SearchComponent />
        </div>
        <img src={voyage} alt="" />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
}
