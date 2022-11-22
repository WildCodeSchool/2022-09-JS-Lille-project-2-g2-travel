import "./BurgerMenu.css";
import { FaBars, FaTimes, FaRandom } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { RiRoadMapLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
  const [click, setCLick] = useState(false);
  const handleClick = () => setCLick(!click);
  return (
    <div className="menuContainer">
      <div
        className="hamburger"
        role="button"
        onClick={handleClick}
        onKeyDown={handleClick}
        tabIndex={0}
      >
        {click ? (
          <FaTimes size={30} style={{ color: "#00958e" }} />
        ) : (
          <FaBars size={30} styles={{ color: " #00958e" }} />
        )}
      </div>
      <nav className={`menuContent ${click ? "open" : "closed"}`}>
        <ul className="nav-list-burger">
          <NavLink to="/" className="nav-link-burger">
            <li className="nav-item-burger">
              Home
              <SlHome />
            </li>
          </NavLink>
          <NavLink to="/map" className="nav-links-burger">
            <li className="nav-item-burger">
              Map
              <RiRoadMapLine />
            </li>
          </NavLink>
          <NavLink to="/activities" className="nav-links-burger">
            <li className="nav-item-burger">
              Activities
              <FiShoppingBag />
            </li>
          </NavLink>
          <NavLink to="/random" className="nav-links-burger">
            <li className="nav-item-burger">
              Random
              <FaRandom />
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
