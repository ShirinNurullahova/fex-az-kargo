import React from 'react'
import Header from '../Header/Header'
import Footer from '../HomePage/Footer/Footer'
import '../Appeal/Appeal.css'
const Appeal = () => {
  return (
    <div>
   <Header/>

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

    <div class="profile-yeni-muraciet">
        <div>
            <button class="text-medium-14">Yeni muraciet</button>
        </div>
    </div>

    <div class="profile-muracietler-table">
        <table class="GeneratedTable">
            <thead>
                <tr>
                    <th>Sifaris N</th>
                    <th>Mebleg</th>
                    <th>Status</th>
                    <th>Tarix</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>18/07/2022</td>
                    <td>Completed</td>
                </tr>
                <tr>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>18/07/2022</td>
                    <td>Completed</td>
                </tr>
                <tr>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>18/07/2022</td>
                    <td>Completed</td>
                </tr>
                <tr>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>18/07/2022</td>
                    <td>Completed</td>
                </tr>
                <tr>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>18/07/2022</td>
                    <td>Completed</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</main>

  <Footer/>
    </div>
  )
}

export default Appeal