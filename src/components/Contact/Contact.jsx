import React from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <div>
    <Header/>
<main class="contact-page d-flex">
        <div class="contact-info">
            <h2 class="contact-title">Əlaqə məlumatları</h2>
            <p class="contact-description text-medium-16">
                Bizimlə maraqlandığın üçün təşəkkür edirik. Aşağıdakı məlumatlar vasitəsilə bizimlə əlaqə saxlaya bilərsən.
            </p>
            <p class="contact-details-item text-regular-16">info@fex.az</p>
            <p class="contact-details-item contact-number text-regular-16">+994(50) 123 45 67 / +994(12) 123 45 6</p>
            <p class="contact-details-item text-regular-16">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        </div>
        <div class="contact-form">
            <h5 class="contact-form-title text-medium-16">Biz sizə zəng edərik</h5>
            <form action="POST" class="contact-form-inputs">
                <label for="name" class="input-label text-medium-16">
                    Ad, Soyad (İngilis hərflərilə) <br />
                    <input type="text" id="name" class="label-input text-regular-16"/> 
                </label>
                <label for="number" class="input-label text-medium-16">
                    Telefon nomrəsi <br />
                    <input type="tel" placeholder="+994(__) ___ __ __" id="number" class="label-input text-regular-16"/> 
                </label>
                <label for="e-mail" class="input-label text-medium-16">
                    E-mail <br />
                    <input type="email" id="e-mail" class="label-input text-regular-16" placeholder="E-mail adresiniz"/> 
                </label>
                <label for="message" class="input-label text-medium-16">
                    Mesajınız <br />
                    <textarea name="message" id="message" cols="20" rows="5" class="label-input text-regular-16"></textarea>
                </label>
                <button class="form-submit-button text-medium-14">Göndər</button>
            </form>
        </div>
    </main>
   <Footer/>
    </div>
  )
}

export default Contact