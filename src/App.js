import "./App.css";

import Scroller from "./Components/Scroller/Scroller";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Scroller />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
