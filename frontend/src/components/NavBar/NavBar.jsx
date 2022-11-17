import "./navBar.css";
import { SlHome } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { FaRandom } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle = {
    backgroundColor: "rgba(0, 149, 142, 1)",
    color: "white",
    borderColor: "rgba(0, 149, 142, 1)",
  };

  return (
    <div className="navigation">
      <ul className="nav-desktop">
        <NavLink
          to="/"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-list-desktop">
            Home
            <SlHome />
          </li>
        </NavLink>
        <NavLink
          to="/map"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-list-desktop">
            Map
            <RiRoadMapLine />
          </li>
        </NavLink>
        <NavLink
          to="/activities"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-list-desktop">
            Activities
            <FiShoppingBag />
          </li>
        </NavLink>
        <NavLink
          to="/random"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-list-desktop">
            Random
            <FaRandom />
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
