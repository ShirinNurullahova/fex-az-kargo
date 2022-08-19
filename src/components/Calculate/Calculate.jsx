import React , {useState} from 'react'
import '../Calculate/Calculate.css';
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import DropDown from '../HomePage/DropDown/DropDown';
import DropDown2 from '../HomePage/DropDown2/DropDown2';
const Calculate = () => {
    const [selected , setSelected] =useState("Turkiye")
const [selected2 , setSelected2] =useState("Diger")
    return (
        <div>
            <Header />
            <main class="profile-page">

                <div class="profile-left">
                    <div class="profile-user">
                        <h2>Nigar Aliyeva </h2>
                        <p>ID: xxxxxxx</p>
                    </div>

                    <div class="profile-categories">
                        <ul>
                            <li class="text-regular-16">Bəyənatlar/Bağlamalar</li>
                            <li class="text-regular-16">Hesablama kalkulyatoru</li>
                            <li class="text-regular-16">Sifariş Et/Qapıda Ödəmə</li>
                            <li class="text-regular-16">Balansım</li>
                            <li class="text-regular-16">Etibarnamələr</li>
                            <li class="text-regular-16">Ödənişlər tarixcəsi</li>
                            <li class="text-regular-16">Xarici ünvanlar</li>
                            <li class="text-regular-16">Borclar</li>
                            <li class="text-regular-16">Cashback</li>
                            <li class="text-regular-16">Promo kod</li>
                            <li class="text-regular-16">Müraciətlərim</li>
                            <li class="text-regular-16">Xəritə</li>
                            <li class="text-regular-16">Əlaqəli hesablara</li>
                            <li class="text-regular-16">Kuryer sifarişlərim</li>
                            <li class="text-regular-16">Şəxsi məlumatlarım</li>
                            <li class="text-regular-16">Çıxış</li>
                        </ul>
                    </div>
                </div>

                <div class="profile-right">

                    <div class="profile-header">
                        <div class="profile-header-tab">
                            <span class="text-regular-16">Dasinma balansi</span>
                            <p class="text-semibold-16">0.00AZN</p>
                        </div>

                        <div class="profile-header-tab">
                            <span class="text-regular-16">Sifaris et balansi</span>
                            <p class="text-semibold-16">0.00AZN</p>
                        </div>

                        <div class="profile-header-tab">
                            <span class="text-regular-16">Limit</span>
                            <p class="text-semibold-16">0$</p>
                        </div>

                        <div class="profile-header-tab">
                            <span class="text-regular-16">Baglama sayi</span>
                            <p class="text-semibold-16">0</p>
                        </div>
                    </div>

                    <form class="calculate-form" action="#">
                        <div class="inputs-container d-flex-container">
                            <div class="input d-flex input-country text-medium-16">
                                <label for="country"><p>Ölkə</p></label>
                                <DropDown selected={selected} setSelected={setSelected} />

                            </div>
                            <div class="input d-flex input-country text-medium-16">
                                <label for="country"><p>Məhsul tipi</p></label>
                                <DropDown2 selected2={selected2} setSelected2={setSelected2} />

                            </div>

                            <label className="input input-country text-medium-16"> <p>Eni(sm)</p> <input type="text" placeholder='0' /></label>
                            <label className="input input-country text-medium-16"> <p>Hündürlük(sm)</p> <input type="text" placeholder='0' /></label>
                            <label className="input input-country text-medium-16"> <p>Uzunluq(sm)</p> <input type="text" placeholder='0' /></label>
                            <label className="input input-country text-medium-16"> <p>Çəki(kg)</p> <input type="text" placeholder='0' /></label>


                        </div>

                        <button class="d-flex-container text-regular-14 pointer button">
                            Çatdırılma qiyməti
                            <span class="text-medium-16">11.27 USD</span>
                        </button>
                    </form>

                </div>

            </main>


            <Footer />
        </div>
    )
}

export default Calculate