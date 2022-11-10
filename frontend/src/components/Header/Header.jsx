import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import "./header.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="header-nav">
      <div className="header">
        <BurgerMenu />
        <Logo />
      </div>
      <NavBar />
    </div>
  );
}
