import React, { useState } from 'react';
import "../HomePage/HomePage.css"
import logo from '../../assets/images/logo.svg';
import Header from '../Header/Header';
import DropDown from './DropDown/DropDown';
import DropDown2 from './DropDown2/DropDown2';
import Tarifs from './Tarifs/Tarifs';
import HomeServices from './HomeServices/HomeServices';
import News from './News/News';
import Footer from './Footer/Footer';
const HomePage = () => {

const [selected , setSelected] =useState("Turkiye")
const [selected2 , setSelected2] =useState("Diger")



  return (
    <div>
      <Header />
      <main class="d-flex home-main-section">
        <div class="calculate-description-header-container">
          <h1>Hesabla</h1>
          <p class="text-regular-16">
            Sit vitae felis quis blandit. Proin congue tincidunt vitae
            sollicitudin a ut ut nunc viverra. Sit eu et quis maecenas. Dui.
          </p>
        </div>
        <form class="calculate-form" action="#">
        <div class="inputs-container d-flex-container">
        <div class="input d-flex input-country text-medium-16">
          <label for="country"><p>Ölkə</p></label>
          <DropDown selected={selected} setSelected={setSelected}/>

        </div>
        <div class="input d-flex input-country text-medium-16">
          <label for="country"><p>Məhsul tipi</p></label>
          <DropDown2 selected2={selected2} setSelected2={setSelected2}/>

        </div>
     
        <label className="input input-country text-medium-16"> <p>Eni(sm)</p> <input type="text" placeholder='0'/></label>
        <label className="input input-country text-medium-16"> <p>Hündürlük(sm)</p> <input type="text" placeholder='0'/></label>
        <label className="input input-country text-medium-16"> <p>Uzunluq(sm)</p> <input type="text" placeholder='0'/></label>
        <label className="input input-country text-medium-16"> <p>Çəki(kg)</p> <input type="text" placeholder='0'/></label>

          
        </div>
            
          <button class="d-flex-container text-regular-14 pointer button">
            Çatdırılma qiyməti
            <span class="text-medium-16">11.27 USD</span>
          </button>
        </form>
      </main>

        <Tarifs/>
        <HomeServices/>
        <News/>
        <Footer/>

    </div>
  )
}

export default HomePage