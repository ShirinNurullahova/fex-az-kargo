import React from 'react'
import Header from '../Header/Header'
import Footer from '../HomePage/Footer/Footer'
import '../Location/Location.css'
const Location = () => {
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
            <div style={{display:"flex", flexDirection:"column"}}>
            <li class="text-regular-16" id='beyan'>Xarici ünvanlar </li>
              <span className='beyan-span'></span>
            </div>
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

    <div class="profile-unvanlar-container">

        <div class="profile-unvan">
            <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 0.25C13.261 0.255591 8.71766 2.14064 5.36666 5.49164C2.01566 8.84264 0.13061 13.386 0.125019 18.125C0.119343 21.9977 1.38436 25.7654 3.72602 28.85C3.72602 28.85 4.21352 29.4919 4.29314 29.5845L18 45.75L31.7134 29.5764C31.7849 29.4903 32.274 28.85 32.274 28.85L32.2756 28.8451C34.6161 25.7619 35.8806 21.996 35.875 18.125C35.8694 13.386 33.9844 8.84264 30.6334 5.49164C27.2824 2.14064 22.739 0.255591 18 0.25ZM18 24.625C16.7144 24.625 15.4577 24.2438 14.3888 23.5296C13.3199 22.8153 12.4868 21.8002 11.9948 20.6124C11.5028 19.4247 11.3741 18.1178 11.6249 16.8569C11.8757 15.596 12.4948 14.4378 13.4038 13.5288C14.3129 12.6198 15.4711 12.0007 16.7319 11.7499C17.9928 11.4991 19.2997 11.6278 20.4875 12.1198C21.6752 12.6118 22.6903 13.4449 23.4046 14.5138C24.1188 15.5827 24.5 16.8394 24.5 18.125C24.4979 19.8482 23.8124 21.5003 22.5938 22.7188C21.3753 23.9373 19.7233 24.6229 18 24.625Z"
                    fill="#F8BF11" />
            </svg>

            <div class="profile-unvan-country">
                <h2>Turkiye</h2>
            </div>

            <div class="profile-unvan-details">
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Ad Soyad</p>
                    <p class="text-regular-16" id='nigga'>Nigga Y</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">ZIP/Post kodu</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Adres basligi 2</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Ilce</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Il sehir</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Semt/Mahalle</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Telefon</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Kuce</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Olke</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">TC Kimlik</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Teslim alan kisi</p>
                    <p class="text-regular-16">34515</p>
                </div>
            </div>

        </div>

        <div class="profile-unvan">
            <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 0.25C13.261 0.255591 8.71766 2.14064 5.36666 5.49164C2.01566 8.84264 0.13061 13.386 0.125019 18.125C0.119343 21.9977 1.38436 25.7654 3.72602 28.85C3.72602 28.85 4.21352 29.4919 4.29314 29.5845L18 45.75L31.7134 29.5764C31.7849 29.4903 32.274 28.85 32.274 28.85L32.2756 28.8451C34.6161 25.7619 35.8806 21.996 35.875 18.125C35.8694 13.386 33.9844 8.84264 30.6334 5.49164C27.2824 2.14064 22.739 0.255591 18 0.25ZM18 24.625C16.7144 24.625 15.4577 24.2438 14.3888 23.5296C13.3199 22.8153 12.4868 21.8002 11.9948 20.6124C11.5028 19.4247 11.3741 18.1178 11.6249 16.8569C11.8757 15.596 12.4948 14.4378 13.4038 13.5288C14.3129 12.6198 15.4711 12.0007 16.7319 11.7499C17.9928 11.4991 19.2997 11.6278 20.4875 12.1198C21.6752 12.6118 22.6903 13.4449 23.4046 14.5138C24.1188 15.5827 24.5 16.8394 24.5 18.125C24.4979 19.8482 23.8124 21.5003 22.5938 22.7188C21.3753 23.9373 19.7233 24.6229 18 24.625Z"
                    fill="#F8BF11" />
            </svg>

            <div class="profile-unvan-country">
                <h2>Rusiya</h2>
            </div>

            <div class="profile-unvan-details">
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Ad Soyad</p>
                    <p class="text-regular-16" id='nigga'>Nigga Y</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">ZIP/Post kodu</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Adres basligi 2</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Ilce</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Il sehir</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Semt/Mahalle</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Telefon</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Kuce</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Olke</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">TC Kimlik</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Teslim alan kisi</p>
                    <p class="text-regular-16">34515</p>
                </div>
            </div>

        </div>

        <div class="profile-unvan">
            <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 0.25C13.261 0.255591 8.71766 2.14064 5.36666 5.49164C2.01566 8.84264 0.13061 13.386 0.125019 18.125C0.119343 21.9977 1.38436 25.7654 3.72602 28.85C3.72602 28.85 4.21352 29.4919 4.29314 29.5845L18 45.75L31.7134 29.5764C31.7849 29.4903 32.274 28.85 32.274 28.85L32.2756 28.8451C34.6161 25.7619 35.8806 21.996 35.875 18.125C35.8694 13.386 33.9844 8.84264 30.6334 5.49164C27.2824 2.14064 22.739 0.255591 18 0.25ZM18 24.625C16.7144 24.625 15.4577 24.2438 14.3888 23.5296C13.3199 22.8153 12.4868 21.8002 11.9948 20.6124C11.5028 19.4247 11.3741 18.1178 11.6249 16.8569C11.8757 15.596 12.4948 14.4378 13.4038 13.5288C14.3129 12.6198 15.4711 12.0007 16.7319 11.7499C17.9928 11.4991 19.2997 11.6278 20.4875 12.1198C21.6752 12.6118 22.6903 13.4449 23.4046 14.5138C24.1188 15.5827 24.5 16.8394 24.5 18.125C24.4979 19.8482 23.8124 21.5003 22.5938 22.7188C21.3753 23.9373 19.7233 24.6229 18 24.625Z"
                    fill="#F8BF11" />
            </svg>

            <div class="profile-unvan-country">
                <h2>Amerika</h2>
            </div>

            <div class="profile-unvan-details">
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Ad Soyad</p>
                    <p class="text-regular-16">Nigga Y</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">ZIP/Post kodu</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Adres basligi 2</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Ilce</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Il sehir</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Semt/Mahalle</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Telefon</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Kuce</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Olke</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">TC Kimlik</p>
                    <p class="text-regular-16">34515</p>
                </div>
                <div class="profile-unvan-details-item">
                    <p class="text-medium-16">Teslim alan kisi</p>
                    <p class="text-regular-16">34515</p>
                </div>
            </div>

        </div>

    </div>

</div>



</main>


            <Footer />
        </div>
    )
}

export default Location