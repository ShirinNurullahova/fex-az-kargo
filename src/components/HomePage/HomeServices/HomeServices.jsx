import React from 'react'
import '../HomeServices/HomeServices.css'
const HomeServices = () => {
  return (
    <section class="home-service-wrapper">
    <h2 class="service-heading">Xidmətlərimiz</h2>
    <div class="service-cards-container d-flex">
      <div class="service-card d-flex">
        <div class="service-card-left-item"></div>
        <div class="service-card-right-item">
          <h4 class="service-card-title text-medium-16">Sifariş et</h4>
          <div class="service-card-description">
            <p class="card-desc text-regular-14">
              Məhsulu siz seçirsiniz, linkini göndərirsiniz, ödəniş edirsiniz,
              sifariş tərəfimizdən yerinə yetrilir. Bu xidmət üçün komissiya
              haqqı 5% təşkil edir.
            </p>
          </div>
        </div>
      </div>
      <div class="service-card d-flex">
        <div class="service-card-left-item"></div>
        <div class="service-card-right-item">
          <h4 class="service-card-title text-medium-16">
            Bağlamaların daşınması
          </h4>
          <div class="service-card-description">
            <p class="card-desc text-regular-14">
              FEX olaraq Türkiyədən bağlamaların sürətli şəkildə daşınmasını
              həyata keçiririk. Xaricdəki anbarımıza daxil olan bağlamalar,
              daxil olduğu gündən etibarən 5 iş günü ərzində Bakı ofisimizə
              çatdırılır.
            </p>
          </div>
        </div>
      </div>
      <div class="service-card d-flex">
        <div class="service-card-left-item"></div>
        <div class="service-card-right-item">
          <h4 class="service-card-title text-medium-16">
            Türkiyədə "Kapıda ödeme" xidməti
          </h4>
          <div class="service-card-description">
            <p class="card-desc text-regular-14">
            Məhsulu siz seçirsiniz, linkini göndərirsiniz, 
            ödəniş edirsiniz, sifariş tərəfimizdən yerinə yetrilir.
             Bu xidmət üçün komissiya haqqı 5% təşkil edir.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeServices