import React from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../NewAppeal/NewAppeal.css'
const NewAppeal = () => {
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
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <li class="text-regular-16" id='beyan'>Müraciətlərim</li>
                                <span className='beyan-span'></span>
                            </div> 
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

                    <div className='new-appeal'>
                        <div className='new-appeal1'>
                            <label for="name" class=" text-medium-16"  id='label-id'>
                              <p>Kategoriya</p>  
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                            <label for="name" class=" text-medium-16" id='label-id'>
                               <p>Olke</p> 
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                        </div>
                        <div className='new-appeal1'>



                            <div id="File-Body1" >
                               Fayl
                                <label id="File-Lable" class="register-form-label text-medium-16" for="File-For">
                                    <div id="Filebutton1">Select your file</div>

                                </label>
                                <input className="appeal-info" id="File-For" type="file" />
                            </div>
                            <label for="name" class=" text-medium-16" id='label-id'>
                               <p>Mesajiniz</p> 
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                        </div>


                        <div className='personDiv'>
                            <button class="text-medium-14 form-submit-button" id='beyanET' >Beyan Et</button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default NewAppeal