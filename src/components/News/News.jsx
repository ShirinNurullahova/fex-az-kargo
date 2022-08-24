import React, { useRef } from 'react'
import '../News/News.css'
import Header from '../Header/Header';
import image1 from '../../assets/images/news-img-1.png';
import image2 from '../../assets/images/news-img-2.png';
import image3 from '../../assets/images/news-img-3.png';
import arrowLeft from '../../assets/images/left-arrow.png';
import arrowRight from '../../assets/images/right-arrow.png';
import Footer from '../HomePage/Footer/Footer';
const News = () => {
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


        if (e.target.innerHTML === 'Yeni') {
            e.target.nextElementSibling.style.color = "#797979";
        } else {
            e.target.previousElementSibling.style.color = "#797979";
        }


    }
    return (
        <div>
            <Header />
            <section class="news-section-wrapper">
                <h2 class="news-heading">Yeniliklər</h2>
                <div class="home-tarrifs-countries d-flex text-medium-16">
                    <p id="home-turkiye" onClick={yellowLine}>Yeni</p>
                    <p id="home-amerika" onClick={yellowLine}>Kohne</p>
                    <span id="yellow-underline" class="home-tarrifs-line" ref={yellowRef}></span>
                </div>

                <div class="news-cards-container d-flex-container">
                    <div class="news-card d-flex">
                        <div class="news-card-image-part">
                            <img src={image1} alt="" />
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
                            <img src={image2} alt="" />
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
                            <img src={image3} alt="" />
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
                            <img src={image3} alt="" />
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
                            <img src={image3} alt="" />
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
                            <img src={image3} alt="" />
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
                <div class="pagination">
                    <span class="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>...</span>
                    <span class="end">end</span>
                    <button class="arrow left">
                        <img src={arrowLeft} alt="" />
                    </button>
                    <button class="arrow right">
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    )
}


export default News;