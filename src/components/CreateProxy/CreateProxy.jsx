import React from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../CreateProxy/CreateProxy.css'

const CreateProxy = () => {
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
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <li class="text-regular-16" id='beyan'>Etibarnamələr</li>
                                <span className='beyan-span'></span>
                            </div>
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
                    <p className='etibarname'>Etibarname yarat</p>
                    <div className='create-proxy'>
                        <div className='new-appeal1'>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>Ad / Soyad/ Ata adi</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>Telefon</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                        </div>
                        <div className='new-appeal1'>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>S/V seriya nomresi</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>S/V FIN kodu</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" />
                            </label>
                        </div>
                        <div className='new-appeal1'>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>Dogum tarixi</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" placeholder='dd.mm.yyyy' />
                            </label>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>Valyuta</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" placeholder='0' />
                            </label>
                        </div>
                        <div className='new-appeal1'>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>Miqdar</p>
                                <input className="appeal-info text-regular-16" type="text" id="name" placeholder='AZE _ _ _ _ _ _ _ _' />
                            </label>
                            <label for="name" class=" text-medium-16" id='label-id'>
                                <p className='yazi'>Etrafli</p>
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

export default CreateProxy