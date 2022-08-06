import "./App.css";
import "./muiglobal.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";

import Home from "./Components/Pages/Home/Home";
import AddRecord from "./Components/Pages/AddRecord/AddRecord";
import NotFound from "./Components/Pages/NotFound/Notfound";
import Auth from "./Components/Pages/Auth/Auth";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AuthDomain,
    databaseURL: process.env.REACT_APP_BaseURL,
    projectId: process.env.REACT_APP_ProjectID,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId,
    appId: process.env.REACT_APP_AppId,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-short" element={<AddRecord />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Navbar />
      </div>
    </Router>
  );
}

export default App;
