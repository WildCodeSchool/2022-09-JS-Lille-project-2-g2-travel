import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        Title="Card Title"
        ImageUrl="cdn.pixabay.com/photo/2022/09/30/10/05/river-7489170_1280.jpg"
        Body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi recusandae, sed quidem quod, in, iure assumenda quis maxime voluptatibus nemo quo inventore non ea deleniti? Nobis aperiam quae ea."
      />
    </div>
  );
}

export default App;
