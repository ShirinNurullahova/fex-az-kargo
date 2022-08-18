import React from 'react';
import '../About/About.css';
import Header from '../Header/Header';
import car from '../../assets/images/courier-car.png'
import man from '../../assets/images/courier-man.png'
import Footer from '../HomePage/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <>

                <main class="about-page-main">
                    <h2 class="about-heading">Haqqımızda</h2>
                    <div class="about-who-we-are d-flex">
                        <div class="about-info">
                            <h4 class="who-we-are-head text-medium-16">BİZ KİMİK ?</h4>
                            <p class="text-about text-medium-16">
                                FEX MMC (VÖEN - 1703209551) şirkəti, Azərbaycan Respublikası İqtisadiyyatNazirliyi tərəfindən
                                verilmiş lisenziya əsasında 2021-ci ildən etibarən fəaliyyət göstərməkdədir.
                            </p>
                            <p class="text-about text-medium-16">
                                “FEX” sürətli poçt şirkəti Türkiyədən və Rusiyadan poçt bağlamalarının, onlayn mağazalar vasitəsilə
                                sifariş edilən malların, eləcə də böyük həcmli və ağır çəkili qeyri-standart yüklərin qısa müddətdə
                                hava nəqliyyatı ilə çatdırılmasını təşkil edirik. Fex.az saytında qeydiyyatdan keçərək
                                xidmətlərimizdən istifadə edə bilərsiniz.
                            </p>
                        </div>
                        <div class="about-courier-image">
                            <img src={car} alt=""/>
                        </div>
                    </div>
                </main>
                <section class="we-are-fex-section">
                    <div class="we-are-fex-content">
                        <h5 class="side-title we-are-fex-desc text-medium-16" id='bizFex'>Biz FEX</h5>
                        <p class="we-are-fex-desc text-medium-16">
                            Biz FEX sürətli poçt şirkəti olaraq Azərbaycan xalqına yüksək keyfiyyətli və operativ xidmət
                            göstərməkdən qürur duyuruq. Bizimlə Siz Xaricdə yerləşən anbarlarımız vasitəsilə ilə onlayn mağazaların
                            Azərbaycana birbaşa göndərməkdən imtina etdikləri məhsulu əldə edə bilərsiniz.
                        </p>
                        <p class="we-are-fex-desc text-medium-16">
                            «FEX» beynəlxalq yük daşımaları sahəsində Güclü texniki bazaya və kadr potensialına təcrübəsi olan
                            etibarlı şirkətdir.
                        </p>
                        <p class="we-are-fex-desc text-medium-16">
                            Bağlama bizim Türkiyə anbarına daxil olduğu gündən etibarən 5 iş günü ərzində Bakıya çatdırılır.
                        </p>
                        <p class="we-are-fex-desc text-medium-16">
                            Bizimlə sifariş zamanı siz Azərbaycan ofislərimizdəki bağlamalarınızı saatlarla növbələrdə gözləmədən
                            onlayn növbə götürməklə əldə edə bilərsiniz.
                        </p>
                        <p class="we-are-fex-desc text-medium-16">
                            «FEX» saytında qeydiyyatdan keçdikdən sonra istənilən fiziki və hüquqi şəxs xidmətlərimizdən istifadə
                            edə bilər. Qeydiyyat ödənişsizdir.
                        </p>
                    </div>
                </section>
                <section class="other-companies-connection-section">
                    <div class="about-other-companies d-flex-container">
                        <div class="companies-connection-info">
                            <p class="companies-about text-medium-16">
                                Şirkətimiz hal-hazırda AZAL, SilkWay, Türk Hava Yolları ve başqa təcrübəli aviaşirkətlərlə
                                əməkdaşlıq edərək Türkiyədən şəxsi və korporativ yüklərin daşınmasını həyata keçirir.
                            </p>
                            <p class="companies-about text-medium-16">
                                Bizim vasitəmizlə daşınan və beynəlxalq yük daşıma qaydalarına əsasən qablaşdırılmış bütün
                                bağlamalar üçün “Ödənişsiz Sığortalama” xidmətini təklif edirik. Bağlama xaricdə yerləşən anbarımıza
                                daxil olduğu andan etibarən müştəriyə təhvil verilənədək bütün məsuliyyət şirkətin üzərinə düşür.
                            </p>
                            <p class="companies-about text-medium-16">
                                Aydındır ki, bir cox onlayn alış-veriş mağazaları bəzən məhsulun rəngini, ölçüsünü səhv göndərə
                                bilər və ya məhsul qüsurlu ola bilər. Bu kimi halların qarşısını almaq və müştəri məmnuniyyətini hər
                                zaman yüksək səviyyədə saxlamaq üçün “Geri Qaytarma” və "Ödənişli xarici anbarda yoxlama" (istəyə
                                bağlı olaraq) xidmətimizi aktivləşdirmişik.
                            </p>
                        </div>
                        <div class="about-courier-man">
                            <img src={man} alt=""/>
                        </div>
                    </div>
                </section>
                <section class="online-pay-section">
                    <div class="online-pay-content">
                        <h5 class="side-title we-are-fex-desc text-medium-16" id='bizimle'>Bizimlə</h5>
                        <p class="online-pay-desc text-medium-16">
                            Bizimlə siz həm də onlayn ödəniş qəbul etməyən, yalnız Türkiyədə “Kapıda Ödeme” tələb edən mağazalardan
                            da alış-veriş edə bilərsiniz.Bunun üçün şirkətimizin əməkdaşları Sizə köməklik edəcək.
                        </p>
                        <p class="online-pay-desc text-medium-16">
                            Biz bütün Azərbaycan əhalisinin Türkiyədən onlayn alış-veriş etməsini və sifarişlərini sürətli şəkildə
                            əldə etməsini təmin etmək üçün bağlamaları bütün Azərbaycanda olan ofislərimiz və ya şöbələrimiz
                            vasitəsilə çatdırırıq.
                        </p>
                        <p class="online-pay-desc text-medium-16">
                            Operativ “Mənim üçün Sifariş Et” xidməti və fasiləsiz işləyən anbarımız, peşəkar müştəri xidmətlərimiz,
                            rahat və zəngin interfeysli veb saytımızla xidmətinizdəyik!
                        </p>
                    </div>
                </section>
                <section class="empty-section"></section>
            </>
            <Footer/>
        </div>
    )
}

export default About