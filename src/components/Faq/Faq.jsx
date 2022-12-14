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
                <h2 class="faq-title">Tez-tez veril??n suallar</h2>
                <nav class="faq-nav">
                    <ul>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    300 dollar G??mr??k limiti ke??ildiyi halda ba??laman?? g??mr??y??
                                    getm??d??n nec?? t??hvil ala bil??r??m?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ??rzind?? b??t??n ba??lamalar Smart Customs mobil t??tbiqind?? v??
                                    e.customs.gov.az sayt??nda b??yan edildikd?? v?? Limit a????m??
                                    olduqda, qeyd olunan vergi ??d??ni??ini an??nda onlayn olaraq h??yata
                                    ke??irib, bu bar??d?? m??lumat verdikd?? ba??lamalar g??mr??kd??
                                    saxlan??lmadan Bak?? Ofisin?? g??nd??ril?? bil??r.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    "Smart Customs"-??n ??st??nl??kl??ri n??l??rdir?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ??rzind?? b??t??n ba??lamalar Smart Customs mobil t??tbiqind?? v??
                                    e.customs.gov.az sayt??nda b??yan edildikd?? v?? Limit a????m??
                                    olduqda, qeyd olunan vergi ??d??ni??ini an??nda onlayn olaraq h??yata
                                    ke??irib, bu bar??d?? m??lumat verdikd?? ba??lamalar g??mr??kd??
                                    saxlan??lmadan Bak?? Ofisin?? g??nd??ril?? bil??r.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    FEX sayt??ndaki balans??m?? nec?? art??ra bil??r??m?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ??rzind?? b??t??n ba??lamalar Smart Customs mobil t??tbiqind?? v??
                                    e.customs.gov.az sayt??nda b??yan edildikd?? v?? Limit a????m??
                                    olduqda, qeyd olunan vergi ??d??ni??ini an??nda onlayn olaraq h??yata
                                    ke??irib, bu bar??d?? m??lumat verdikd?? ba??lamalar g??mr??kd??
                                    saxlan??lmadan Bak?? Ofisin?? g??nd??ril?? bil??r.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    Ba??lamam g??mr??kd?? saxlan??ld??qda n?? etm??liy??m?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ??rzind?? b??t??n ba??lamalar Smart Customs mobil t??tbiqind?? v??
                                    e.customs.gov.az sayt??nda b??yan edildikd?? v?? Limit a????m??
                                    olduqda, qeyd olunan vergi ??d??ni??ini an??nda onlayn olaraq h??yata
                                    ke??irib, bu bar??d?? m??lumat verdikd?? ba??lamalar g??mr??kd??
                                    saxlan??lmadan Bak?? Ofisin?? g??nd??ril?? bil??r.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    Kuryer sifari?? etdikd?? kuryer haqq?? h??r ba??lama ??????n ayr??m??
                                    hesablan??r?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ??rzind?? b??t??n ba??lamalar Smart Customs mobil t??tbiqind?? v??
                                    e.customs.gov.az sayt??nda b??yan edildikd?? v?? Limit a????m??
                                    olduqda, qeyd olunan vergi ??d??ni??ini an??nda onlayn olaraq h??yata
                                    ke??irib, bu bar??d?? m??lumat verdikd?? ba??lamalar g??mr??kd??
                                    saxlan??lmadan Bak?? Ofisin?? g??nd??ril?? bil??r.
                                </p>
                            </div>
                        </li>
                        <li ref={liRef}>
                            <div class="d-flex-container text-title">
                                <h2 class="text-medium-14 text-title-h2">
                                    T??rkiy??d??n maye m??hsullar??n da????nmas?? m??mk??nd??rm?? v?? maye
                                    m??hsullar hans?? tarifl?? hesablan??r?
                                </h2>
                                <span ref={spanRef}></span>
                            </div>
                            <div class="d-flex-container text-description" ref={descRef}>
                                <p class="text-regular-14">
                                    Ay ??rzind?? b??t??n ba??lamalar Smart Customs mobil t??tbiqind?? v??
                                    e.customs.gov.az sayt??nda b??yan edildikd?? v?? Limit a????m??
                                    olduqda, qeyd olunan vergi ??d??ni??ini an??nda onlayn olaraq h??yata
                                    ke??irib, bu bar??d?? m??lumat verdikd?? ba??lamalar g??mr??kd??
                                    saxlan??lmadan Bak?? Ofisin?? g??nd??ril?? bil??r.
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