import { useState } from "react";
import "./SearchComponent.css";

function SearchComponent() {
  const [resultSearch, setResultSearch] = useState("");
  const handleInput = (e) => {
    setResultSearch(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="search"
          id="search_SearchComponent"
          name="q"
          placeholder="Quelle destination?"
          value={resultSearch}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default SearchComponent;
