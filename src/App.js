import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import HomePage from '../src/components/HomePage/HomePage.jsx'
import Services from './components/Services/Services';
import TariflerNew from "./components/TariflerNew/TariflerNew";
import News from "./components/News/News";
import About from "./components/About/About";
import Faq from './components/Faq/Faq';
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/services" element={<Services  />} />
          <Route exact path="/tariflernew" element={<TariflerNew />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>
      </Router>














    </div>
  );
}

export default App;
