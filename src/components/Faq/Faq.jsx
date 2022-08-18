import React, { useRef, useEffect } from 'react'
import Header from '../Header/Header';
import '../Faq/Faq.css';
import Footer from '../../components/HomePage/Footer/Footer'
const Faq = () => {
    const liRef = useRef()
    const descRef = useRef()
    const spanRef = useRef()



    useEffect(() => {
        const lists = [...document.querySelectorAll("li")];

        let nthLi = [];
        lists.forEach((li, index) => {
            const textDescription = li.querySelector(".text-description");

            const span = li.querySelector("span");

            li.setAttribute("data-id", index);


            li.addEventListener("click", (e) => {
            
                e.stopImmediatePropagation();
                if (!li.className.includes("active")) {
                    li.classList.add("active");
                    textDescription.classList.add("active");
                    textDescription.style.height = textDescription.scrollHeight / 3 + "vh";
                    span.classList.add("active");
                } else {
                    li.classList.remove("active");
                    textDescription.classList.remove("active");
                    span.classList.remove("active");
                    textDescription.style.height = null;
                  }

              
                if (nthLi.length > 1) {
                    const liHasActive = nthLi[nthLi.length - 2];
                    const liTextDescription = liHasActive.querySelector(".text-description");
                    const liSpan = liHasActive.querySelector("span");

                    if (liHasActive.className.includes("active")) {
                        const getAttributeData = liHasActive.getAttribute("data-id");
                        if (Number(getAttributeData) !== index) {
                            liHasActive.classList.remove("active");
                            liTextDescription.classList.remove("active");
                            liSpan.classList.remove("active");
                            liTextDescription.style.height = null;
                        }
                    }
                }
            });
        });

        document.body.addEventListener("click", (e) => {
            lists.find((li) => {
                if (!e.composedPath().includes(li)) {
                    const textDescription = li.querySelector(".text-description");
                    const span = li.querySelector("span");
                    if (li.className.includes("active")) {
                        li.classList.remove("active");
                        li.classList.remove("active");
                        textDescription.classList.remove("active");
                        span.classList.remove("active");
                        textDescription.style.height = null;
                    }
                }
            });
        });

    });

    return (
        <div>
            <Header />


            <section class="faq">
                <h2 class="faq-title">Tez-tez verilən suallar</h2>
                <nav class="faq-nav">
                    <ul>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    300 dollar Gömrük limiti keçildiyi halda bağlamanı gömrüyə
                                    getmədən necə təhvil ala bilərəm?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ərzində bütün bağlamalar Smart Customs mobil tətbiqində və
                                    e.customs.gov.az saytında bəyan edildikdə və Limit aşımı
                                    olduqda, qeyd olunan vergi ödənişini anında onlayn olaraq həyata
                                    keçirib, bu barədə məlumat verdikdə bağlamalar gömrükdə
                                    saxlanılmadan Bakı Ofisinə göndərilə bilər.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    "Smart Customs"-ın üstünlükləri nələrdir?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ərzində bütün bağlamalar Smart Customs mobil tətbiqində və
                                    e.customs.gov.az saytında bəyan edildikdə və Limit aşımı
                                    olduqda, qeyd olunan vergi ödənişini anında onlayn olaraq həyata
                                    keçirib, bu barədə məlumat verdikdə bağlamalar gömrükdə
                                    saxlanılmadan Bakı Ofisinə göndərilə bilər.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    FEX saytındaki balansımı necə artıra bilərəm?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ərzində bütün bağlamalar Smart Customs mobil tətbiqində və
                                    e.customs.gov.az saytında bəyan edildikdə və Limit aşımı
                                    olduqda, qeyd olunan vergi ödənişini anında onlayn olaraq həyata
                                    keçirib, bu barədə məlumat verdikdə bağlamalar gömrükdə
                                    saxlanılmadan Bakı Ofisinə göndərilə bilər.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    Bağlamam gömrükdə saxlanıldıqda nə etməliyəm?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ərzində bütün bağlamalar Smart Customs mobil tətbiqində və
                                    e.customs.gov.az saytında bəyan edildikdə və Limit aşımı
                                    olduqda, qeyd olunan vergi ödənişini anında onlayn olaraq həyata
                                    keçirib, bu barədə məlumat verdikdə bağlamalar gömrükdə
                                    saxlanılmadan Bakı Ofisinə göndərilə bilər.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    Kuryer sifariş etdikdə kuryer haqqı hər bağlama üçün ayrımı
                                    hesablanır?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ərzində bütün bağlamalar Smart Customs mobil tətbiqində və
                                    e.customs.gov.az saytında bəyan edildikdə və Limit aşımı
                                    olduqda, qeyd olunan vergi ödənişini anında onlayn olaraq həyata
                                    keçirib, bu barədə məlumat verdikdə bağlamalar gömrükdə
                                    saxlanılmadan Bakı Ofisinə göndərilə bilər.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    Türkiyədən maye məhsulların daşınması mümkündürmü və maye
                                    məhsullar hansı tariflə hesablanır?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ərzində bütün bağlamalar Smart Customs mobil tətbiqində və
                                    e.customs.gov.az saytında bəyan edildikdə və Limit aşımı
                                    olduqda, qeyd olunan vergi ödənişini anında onlayn olaraq həyata
                                    keçirib, bu barədə məlumat verdikdə bağlamalar gömrükdə
                                    saxlanılmadan Bakı Ofisinə göndərilə bilər.
                                </p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </section>
         <Footer/>
        </div>
    )
}

export default Faq