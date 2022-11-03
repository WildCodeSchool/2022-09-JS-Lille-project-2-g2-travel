import "./LocaliseMe.css";

function LocaliseMe() {
  const clickTest = (message) => {
    return message;
  };
  return (
    <button type="button" id="geoloc" onClick={() => clickTest("I clicked")}>
      Localise Me!
    </button>
  );
}

export default LocaliseMe;
