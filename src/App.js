import "./App.css";
import "./muiglobal.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
import AddRecord from "./Components/Pages/AddRecord/AddRecord";
import NotFound from "./Components/Pages/NotFound/Notfound";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-short" element={<AddRecord />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>

        <Navbar />
      </div>
    </Router>
  );
}

export default App;
