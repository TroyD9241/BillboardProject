import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";

import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
