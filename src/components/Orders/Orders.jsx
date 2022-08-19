import React, { useRef, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../HomePage/Footer/Footer';
import '../Orders/Orders.css'
const Orders = () => {
    const witdhRef = useRef()
    useEffect(() => {
        witdhRef.current.style.width = "100px"

    })

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
      
      if(e.target.innerHTML === 'Butun'){
        e.target.nextElementSibling.style.color = "#797979";
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "#797979";

    }else if(e.target.innerHTML === 'Sebet'){
        e.target.previousElementSibling.style.color = "#797979";
        e.target.nextElementSibling.style.color = "#797979";
        e.target.nextElementSibling.nextElementSibling.style.color = "#797979";
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "#797979";


    }else if(e.target.innerHTML === 'Odenildi'){
        e.target.previousElementSibling.style.color = "#797979";
        e.target.nextElementSibling.style.color = "#797979";
    }
    else if(e.target.innerHTML === 'Sifaris verildi'){
        e.target.previousElementSibling.style.color = "#797979";
        e.target.nextElementSibling.style.color = "#797979";
    }
    
    else{
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

                    <div class="profile-sifarishler-buttons">
                        <div>
                            <button class="profile-button-orange">Qapida odeme</button>
                            <button class="profile-button-orange">Yeni sifaris</button>
                        </div>
                    </div>

                    <div class="profile-sifarisher-category">
                        <p class="underline"  onClick={yellowLine}>Butun</p>
                        <p class="underline"  onClick={yellowLine}>Sebet</p>
                        <p class="underline"  onClick={yellowLine}>Odenildi</p>
                        <p class="underline"  ref={witdhRef} onClick={yellowLine}>Sifaris verildi</p>
                        <p class="underline" onClick={yellowLine} >Silindi</p>
                        <span id="yellow-underline" class="home-tarrifs-line" ref={yellowRef}></span>
                    </div>

                    <div class="profile-sifarishler-table">
                        <table class="GeneratedTable">
                            <thead>
                                <tr>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
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

export default Orders