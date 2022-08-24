import React, { useState, useRef } from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../LinkedAccount/LinkedAccount.css'
const LinkedAccount = () => {
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


        if (e.target.innerHTML === 'Referal Linkiniz') {
            e.target.nextElementSibling.style.color = "#797979";
        } else {
            e.target.previousElementSibling.style.color = "#797979";
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

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <li class="text-regular-16" id='beyan'>Əlaqəli hesablara</li>
                                <span className='beyan-span'></span>
                            </div>
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

                    <div class="profile-yeni-muraciet">
                        <div class="home-tarrifs-countries d-flex text-medium-16">
                            <p id="home-turkiye" onClick={yellowLine}>Referal Linkiniz</p>
                            <p id="home-amerika" onClick={yellowLine}>Elageli hesablara</p>
                            <span id="yellow-underline" class="home-tarrifs-line" ref={yellowRef}></span>
                        </div>


                        <div>
                            <button class="text-medium-14" id='referal'>Referal linkiniz</button>
                        </div>
                    </div>

                    <div class="profile-muracietler-table">
                        <table class="GeneratedTable">
                            <thead>
                                <tr>
                                    <th>Musteri kodu</th>
                                    <th>Ad(soyad)</th>
                                    <th>Email</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3439876</td>
                                    <td>$30.00</td>
                                    <td>Pending</td>

                                </tr>
                                <tr>
                                    <td>3439876</td>
                                    <td>$30.00</td>
                                    <td>Pending</td>

                                </tr>
                                <tr>
                                    <td>3439876</td>
                                    <td>$30.00</td>
                                    <td>Pending</td>

                                </tr>
                                <tr>
                                    <td>3439876</td>
                                    <td>$30.00</td>
                                    <td>Pending</td>

                                </tr>
                                <tr>
                                    <td>3439876</td>
                                    <td>$30.00</td>
                                    <td>Pending</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    )
}

export default LinkedAccount