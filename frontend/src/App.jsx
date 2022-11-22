import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./contexts/CityContext";
import Map from "./pages/Map/Map";
import Home from "./pages/Home/Home";
import Activities from "./pages/Activities/Activities";
import Random from "./pages/Random/Random";

export default function App() {
  return (
    <SearchContextProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/random" element={<Random />} />
          </Routes>
        </div>
      </Router>
    </SearchContextProvider>
  );
}
