import logoMobile from "@assets/logo-mobile.png";
import "./logoMobile.css";

export default function LogoMobile() {
  return (
    <div className="logo_responsive">
      <img className="logoMobile" src={logoMobile} alt="Logo" />
    </div>
  );
}
