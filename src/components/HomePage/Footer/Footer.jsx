import React from 'react'
import '../Footer/Footer.css';
import logom from '../../../assets/images/footer-logo.png'
const Footer = () => {
  return (
    <div>


<footer class="footer d-flex-container">
    <div class="logo-container ">
      <a href="/">
        <img src={logom} alt="fotologo" />
      </a>
      <span class="copyright text-regular-12">Fex.az © Copyright 2021</span>
    </div>
    <nav class="navigation">
      <ul class="menu">
        <h2 class="text-medium-16">Menu</h2>
        <li class="text-regular-12"><a href="" id="">Haqqımızda</a></li>
        <li class="text-regular-12"><a href="" id="">Xidmətlər</a></li>
        <li class="text-regular-12"><a href="" id="">Tariflər</a></li>
        <li class="text-regular-12"><a href="" id="">Mağazalar</a></li>
        <li class="text-regular-12"><a href="" id="">Yeniliklər</a></li>
        <li class="text-regular-12"><a href="" id="">Əlaqə</a></li>
      </ul>
      <ul class="help">
        <h2 class="text-medium-16">Kömək</h2>
        <li class="text-regular-12"><a href="" id="">FAQ</a></li>
        <li class="text-regular-12"><a href="" id="">Şərtlər</a></li>
        <li class="text-regular-12">
          <a href="" id="">Qadağan olunan məhsullar</a>
        </li>
        <li class="text-regular-12">
          <a href="" id="">Gizlilik siyasəti</a>
        </li>
        <li class="text-regular-12">
          <a href="" id="">İstifadəçi razılaşması</a>
        </li>
      </ul>
      <ul class="social">
        <h2 class="text-medium-16">Sosial media</h2>
        <li class="text-regular-12"><a href="" id="">Instagram</a></li>
        <li class="text-regular-12"><a href="" id="">Facebook</a></li>
      </ul>
      <ul class="adress">
        <h2 class="text-medium-16">Address</h2>
        <li class="text-regular-12">
          <a href="" id="">Məhəmməd Hadi 76, H.Aslanov metrosunun yanı</a>
        </li>
      </ul>
      <ul class="contact">
        <h2 class="text-medium-16">Contact</h2>
        <li class="text-regular-12">
          <a href="" id="">*0123108745</a>
        </li>
        <li class="text-regular-12"><a href="">info@fex.az</a></li>
      </ul>
    </nav>
  </footer>



    </div>
  )
}

export default Footer