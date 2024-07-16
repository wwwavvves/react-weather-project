import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
