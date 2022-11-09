import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import Location from "../Location/Location";
import "./header.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="header-nav">
      <div className="header">
        <BurgerMenu />
        <Location />
        <Logo />
      </div>
      <NavBar />
    </div>
  );
}
