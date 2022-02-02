import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";

import "./App.css";
import { Homepage } from "./Components/HomePage/Homepage";
import { Sidenav } from "./Components/Sidenav/Sidenav";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
