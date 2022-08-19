import React , {useRef}  from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../Balance/Balance.css'
const Balance = () => {
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
    
   
    if(e.target.innerHTML === 'Sifariş üzrə balans'){
        e.target.nextElementSibling.style.color = "#797979";
    }else{
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

                    <div class="profile-balance-header">
                        <p class="text-medium-16" onClick={yellowLine}>Sifariş üzrə balans</p>
                        <p class="text-medium-16" onClick={yellowLine}>Catdirilma uzre balans</p>
                        <span id="yellow-underline" ref={yellowRef} class="home-tarrifs-line"></span>
                    </div>

                    <div class="profile-balance">
                        <label class="text-medium-16">Mebleg</label>
                        <div>
                            <input type="text" placeholder="TURKIYE" />
                            <select name="" id="">
                                <option value="TRY">TRY</option>
                            </select>
                        </div>
                    </div>

                    <div class="profile-balance-btns-container">
                        <button>+1AZN</button>
                        <button>+5AZN</button>
                        <button>+10AZN</button>
                    </div>

                    <div class="profile-balance-submit">
                        <button>Balansi artir</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}

export default Balance