import React from 'react'
import '../News/News.css';
import one from '../../../assets/images/news-img-1.png';
import two from '../../../assets/images/news-img-2.png';
import three from '../../../assets/images/news-img-3.png';

const News = () => {
  return (
    <section class="home-news-wrapper">
    <h2 class="news-heading">Yeniliklər</h2>
    <div class="news-cards-container d-flex-container">
      <div class="news-card d-flex">
        <div class="news-card-image-part">
          <img src={one} alt="" />
        </div>
        <div class="news-card-details-part">
          <h4 class="news-card-title text-medium-16">
            Kuryer sifarisi vasitesi ile, unvana catdirilma!
          </h4>
          <p class="news-card-desc text-regular-14">
            Məhsulu siz seçirsiniz, linkini göndərirsiniz, ödəniş edirsiniz,
            sifariş...
          </p>
          <div class="news-card-elements d-flex-container">
            <p class="news-card-elem-date text-regular-12">12.05.2021</p>
            <p class="news-card-elem-read text-medium-14 pointer">
              Ətraflı oxu
            </p>
          </div>
        </div>
      </div>
      <div class="news-card d-flex">
        <div class="news-card-image-part">
          <img src={two} alt="" />
        </div>
        <div class="news-card-details-part">
          <h4 class="news-card-title text-medium-16">
            Bağlamaların Turkiyeden Azerbayc...
          </h4>
          <p class="news-card-desc text-regular-14">
            FEX olaraq Türkiyədən bağlamaların sürətli şəkildə daşınmasını...
          </p>
          <div class="news-card-elements d-flex-container">
            <p class="news-card-elem-date text-regular-12">12.05.2021</p>
            <p class="news-card-elem-read text-medium-14 pointer">
              Ətraflı oxu
            </p>
          </div>
        </div>
      </div>
      <div class="news-card d-flex">
        <div class="news-card-image-part">
          <img src={three} alt="" />
        </div>
        <div class="news-card-details-part">
          <h4 class="news-card-title text-medium-16">
            Bağlamaların Turkiyeden Azerbayc...
          </h4>
          <p class="news-card-desc text-regular-14">
            FEX olaraq Türkiyədən bağlamaların sürətli şəkildə daşınmasını...
          </p>
          <div class="news-card-elements d-flex-container">
            <p class="news-card-elem-date text-regular-12">12.05.2021</p>
            <p class="news-card-elem-read text-medium-14 pointer">
              Ətraflı oxu
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default News