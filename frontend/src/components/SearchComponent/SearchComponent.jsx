import "./SearchComponent.css";

function SearchComponent() {
  return (
    <div>
      <input
        type="search"
        id="search"
        name="q"
        placeholder="Quelle destination ?"
      />
    </div>
  );
}

export default SearchComponent;
