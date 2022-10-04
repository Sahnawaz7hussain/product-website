import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllRoutes /> */}
      <HomePage />
    </div>
  );
}

export default App;
