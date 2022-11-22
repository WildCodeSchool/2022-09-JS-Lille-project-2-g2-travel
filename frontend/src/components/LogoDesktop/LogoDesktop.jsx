import logoDesktop from "@assets/logo-desktop.png";
import "./logoDesktop.css";

export default function LogoDesktop() {
  return (
    <div className=" .logo_responsive">
      <img className="logoDesktop" src={logoDesktop} alt="Logo" />
    </div>
  );
}
