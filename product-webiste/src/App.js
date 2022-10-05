import { useState } from "react";
import "./App.css";
import { Modal } from "./Components/Modal";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";
import HomePage from "./Pages/HomePage";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
