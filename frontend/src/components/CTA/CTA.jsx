import UserGeolocalisation from "@components/UserGeolocalisation/UserGeolocalisation";
import SearchComponent from "@components/SearchComponent/SearchComponent";
import "./CTA.css";

function CTA() {
  return (
    <div className="CTA">
      <SearchComponent />
      <UserGeolocalisation />
    </div>
  );
}
export default CTA;
