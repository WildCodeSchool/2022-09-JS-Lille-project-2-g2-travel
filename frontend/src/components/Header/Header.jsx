import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import "./header.css";
import Location from "@components/Location/Location";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="header-nav">
      <div className="header">
        <Location />
        <BurgerMenu />
      </div>
      <NavBar />
    </div>
  );
}
