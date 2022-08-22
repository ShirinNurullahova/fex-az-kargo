import React, { useRef } from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../Declare2/Declare2.css'
const Declare2 = () => {
    const yellowRef = useRef()
    window.onresize = function () {
        let line = document.getElementById("yellow-underline");
        yellowRef.current.style.width = `${line.parentNode.firstElementChild.offsetWidth}px`;
    };

    function yellowLine(e) {
        let parentWidth = e.target.offsetWidth;
        let parentLeft = e.target.offsetLeft;

        document.getElementById("yellow-underline").style.width = `${parentWidth}px`;
        document.getElementById("yellow-underline").style.left = `${parentLeft}px`;
        e.target.style.color = "#454545";

        if (e.target.innerHTML === 'Turkiye') {
            e.target.nextElementSibling.style.color = "#797979";
            e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "#797979";

        } else if (e.target.innerHTML === 'America') {
            e.target.previousElementSibling.style.color = "#797979";



        }

        else {
            e.target.previousElementSibling.style.color = "#797979"
            e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "#797979";
            ;
        }
    }
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

                    <div class="profile-sifarisher-category" id="lineline">
                        <p class="underline" onClick={yellowLine}>Turkiye</p>
                        <p class="underline" onClick={yellowLine}>America</p>

                        <span id="yellow-underline" class="home-tarrifs-line" ref={yellowRef}></span>
                    </div>
                    <div class="profile-beyanet2-table">
                        <form >
                            <div className='beyanet2-check'>
                                <label for="vehicle1" className='bateria'> Bateriali mehsul</label>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            </div>
                            <div className='twoflex'>
                                <label class="register-form-label text-medium-16" id='mesafe'>
                                    Magaza izleme kodu
                                    <input type="text" placeholder="" id="uzunluq" />
                                </label>
                                <label class="register-form-label text-medium-16">
                                    Kategoriya
                                    <input type="text" placeholder="" id="uzunluq" />
                                </label>
                                

                            </div>
                            <label class="register-form-label text-medium-16" id='magaza'>
                                Magazalar
                                <input type="text" placeholder="" />
                            </label>


                            <div className='twoflex'>
                                <label class="register-form-label text-medium-16" id='mesafe'>
                                    Qiymet
                                    <input type="text" placeholder="" id="uzunluq" />
                                </label>
                                <label class="register-form-label text-medium-16">
                                    Valyuta
                                    <input type="text" placeholder="" id="uzunluq" />
                                </label>

                            </div>

                            <div className='twoflex'>
                                <label class="register-form-label text-medium-16" id='mesafe'>
                                   Miqdar
                                    <input type="text" placeholder=" AZE _ _ _ _ _ _ _ _ " id="uzunluq" />
                                </label>


                                <div id="File-Body">
                                    Invoys
                                    <label id="File-Lable" class="register-form-label text-medium-16" for="File-For">
                                        <div id="Filebutton">Select your file</div>

                                    </label>
                                    <input id="File-For" type="file" />
                                </div>
                            </div>
                            <label class="register-form-label text-medium-16" id='magaza'>
                                Etrafli
                                <input type="text" placeholder="" />
                            </label>

                            <label
                                for="chckbtn"
                                class="text-regular-12 checkbox  pointer" id='chck'
                            >
                                <input type="checkbox" name="" id="chckbtn" />
                                <span className='sert'>Şərtləri qəbul edirəm</span> <a href="№">Şərtləri oxu</a>
                            </label>
                            <div className='rgt'>
                            <button class="text-medium-14" id='sari'>Beyan et</button>

                            </div>

                        </form>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Declare2