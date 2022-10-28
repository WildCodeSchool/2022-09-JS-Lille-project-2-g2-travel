// import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import Location from "../Location/Location"
import "./header.css";

export default function Header() {
        return(
          <div class="logo-nav">
            <div className="nav">
              <Location/>
              <Logo />
            </div>
            <NavBar/>
            
            
            
          </div>
        );
};