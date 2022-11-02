import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import Location from "../Location/Location";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Location />
        <Logo />
      </div>
      <NavBar />
    </div>
  );
}
