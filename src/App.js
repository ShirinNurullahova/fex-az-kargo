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
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Balance from "./components/Balance/Balance";
import Calculate from "./components/Calculate/Calculate";
import Orders from "./components/Orders/Orders";
import Payment from "./components/Payment/Payment";
import Proxy from './components/Proxy/Proxy';
import Location from "./components/Location/Location";
import Appeal from "./components/Appeal/Appeal";
import Shop from "./components/Shop/Shop";
import Declare from "./components/Declare/Declare";
import Declare2 from "./components/Declare2/Declare2";
import Trendyol from "./components/Trendyol/Trendyol";
import Trendyol2 from './components/Trendyol2/Trendyol2'
import LinkedAccount from "./components/LinkedAccount/LinkedAccount";
import CourierOrder from "./components/CourierOrder/CourierOrder";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import NewAppeal from "./components/NewAppeal/NewAppeal";
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
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/balance" element={<Balance />} />
          <Route exact path="/calculate" element={<Calculate />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/proxy" element={<Proxy />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/appeal" element={<Appeal />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/declare" element={<Declare />} />
          <Route exact path="/declare2" element={<Declare2 />} />
          <Route exact path="/trendyol" element={<Trendyol />} />
          <Route exact path="/trendyol2" element={<Trendyol2 />} />
          <Route exact path="/linkedacc" element={<LinkedAccount />} />
          <Route exact path="/courier" element={<CourierOrder />} />
          <Route exact path="/personalinfo" element={<PersonalInfo />} />
          <Route exact path="/newappeal" element={<NewAppeal />} />

        </Routes>
      </Router>














    </div>
  );
}

export default App;
