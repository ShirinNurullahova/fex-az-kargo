import React, { useState , useRef} from 'react'
import '../TariflerNew/TariflerNew.css';
import Header from '../Header/Header';
import DropDown from '../HomePage/DropDown/DropDown';
import DropDown2 from '../HomePage/DropDown2/DropDown2';
import Footer from '../HomePage/Footer/Footer'
const TariflerNew = () => {

    const [selected, setSelected] = useState("Turkiye")
    const [selected2, setSelected2] = useState("Diger")
    
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


        if (e.target.innerHTML === 'Turkiye') {
            e.target.nextElementSibling.style.color = "#797979";
        } else {
            e.target.previousElementSibling.style.color = "#797979";
        }


    }
    return (
        <div>
            <Header />
            <main class="tarrifs-page d-flex">

                <div class="tarrifs-page-left">
                    <div class="home-tarrifs-text tarrifs-page-text">
                        <div class="home-tarrifs-text-heading">
                            <h2 >Tariflər</h2>
                        </div>

                        <div class="home-tarrifs-text-desc text-medium-16">
                            <p>Sit vitae felis quis blandit. Proin congue</p>
                            <p>tincidunt vitae sollicitudin a ut ut nunc viverra</p>
                            <p>Sit eu et quis maecenas. Dui.</p>
                        </div>
                    </div>

                    <div class="home-tarrifs-table">
                        <div class="home-tarrifs-countries d-flex text-medium-16">
                            <p id="home-turkiye" onClick={yellowLine}>Turkiye</p>
                            <p id="home-amerika" onClick={yellowLine}>Amerika</p>
                            <span id="yellow-underline" class="home-tarrifs-line" ref={yellowRef}></span>
                        </div>

                        <div class="home-tarrifs-box">
                            <div class="home-tarrifs-inner d-flex-container text-medium-14">
                                <div class="home-tarrifs-weight">
                                    <p>0,10 kq-dək</p>
                                </div>

                                <div class="home-tarrifs-price">
                                    <p>2 USD</p>
                                </div>
                            </div>

                            <div class="home-tarrifs-inner d-flex-container text-medium-14">
                                <div class="home-tarrifs-weight">
                                    <p>0,10 kq-dək</p>
                                </div>

                                <div class="home-tarrifs-price">
                                    <p>2 USD</p>
                                </div>
                            </div>

                            <div class="home-tarrifs-inner d-flex-container text-medium-14">
                                <div class="home-tarrifs-weight">
                                    <p>0,10 kq-dək</p>
                                </div>

                                <div class="home-tarrifs-price">
                                    <p>2 USD</p>
                                </div>
                            </div>

                            <div class="home-tarrifs-inner d-flex-container text-medium-14">
                                <div class="home-tarrifs-weight">
                                    <p>0,10 kq-dək</p>
                                </div>

                                <div class="home-tarrifs-price">
                                    <p>2 USD</p>
                                </div>
                            </div>

                            <div class="home-tarrifs-inner d-flex-container text-medium-14">
                                <div class="home-tarrifs-weight">
                                    <p>0,10 kq-dək</p>
                                </div>

                                <div class="home-tarrifs-price">
                                    <p>2 USD</p>
                                </div>
                            </div>

                            <div class="home-tarrifs-inner d-flex-container text-medium-14">
                                <div class="home-tarrifs-weight">
                                    <p>0,10 kq-dək</p>
                                </div>

                                <div class="home-tarrifs-price">
                                    <p>2 USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tarrifs-page-right">

                    <div class="home-tarrifs-text-heading">
                        <h2 className='textTarif'>Hesabla</h2>
                    </div>
                    <form class="calculate-form" action="#">
                        <div class="inputs-container d-flex-container">
                            <div class="input d-flex input-country text-medium-16">
                                <label for="country"><p>Ölkə</p></label>
                                <DropDown selected={selected} setSelected={setSelected} />

                            </div>
                            <div class="input d-flex input-country text-medium-16">
                                <label for="country"><p>Məhsul tipi</p></label>
                                <DropDown2 selected2={selected2} setSelected2={setSelected2} />

                            </div>

                            <label className="input input-country text-medium-16"> <p>Eni(sm)</p> <input type="text" placeholder='0' /></label>
                            <label className="input input-country text-medium-16"> <p>Hündürlük(sm)</p> <input type="text" placeholder='0' /></label>
                            <label className="input input-country text-medium-16"> <p>Uzunluq(sm)</p> <input type="text" placeholder='0' /></label>
                            <label className="input input-country text-medium-16"> <p>Çəki(kg)</p> <input type="text" placeholder='0' /></label>


                        </div>

                        <button class="d-flex-container text-regular-14 pointer button">
                            Çatdırılma qiyməti
                            <span class="text-medium-16">11.27 USD</span>
                        </button>
                    </form>

                </div>

            </main>
        <Footer/>
        </div>
    )
}

export default TariflerNew