import "./navBar.css";
import { AiFillHome } from "react-icons/fa";
// import { AiFillEnvironment } from "react-icons/fa";
// import { AiFillCheckCircle } from "react-icons/fa";
// import { AiFillMobile } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <AiFillHome />
        <li>
          <a href="Map">Map</a>
        </li>
        <li>
          <a href="Activities">Activities</a>
        </li>
        <li>
          <a href="Random">Random</a>
        </li>
      </ul>
    </div>
  );
}
