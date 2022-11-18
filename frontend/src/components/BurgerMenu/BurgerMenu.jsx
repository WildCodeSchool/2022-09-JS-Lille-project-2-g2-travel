import "./BurgerMenu.css";
import { FaBars, FaTimes, FaRandom } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { RiRoadMapLine } from "react-icons/ri";
import { useState } from "react";

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
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} styles={{ color: "#000" }} />
        )}
      </div>
      <nav className={`menuContent ${click ? "open" : "closed"}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="Home">
              Home
            </a>
            <SlHome />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Map">
              Map
            </a>
            <RiRoadMapLine />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Activities">
              Activities
            </a>
            <FiShoppingBag />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Random">
              Random
            </a>
            <FaRandom />
          </li>
        </ul>
      </nav>
    </div>
  );
}
