import "./navBar.css";
import { SlHome } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { FaRandom } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="navigation">
      <ul className="nav-desktop">
        <li className="nav-list-desktop">
          <a href="Home">Home</a>
          <SlHome />
        </li>
        <li className="nav-list-desktop">
          <a href="Map">Map</a>
          <RiRoadMapLine />
        </li>
        <li className="nav-list-desktop">
          <a href="Activities">Activities</a>
          <FiShoppingBag />
        </li>
        <li className="nav-list-desktop">
          <a href="Random">Random</a>
          <FaRandom />
        </li>
      </ul>
    </div>
  );
}
