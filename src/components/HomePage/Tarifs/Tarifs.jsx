import React , {useEffect, useRef} from 'react'
import '../Tarifs/Tarifs.css'
const Tarifs = () => {
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
    
   
    if(e.target.innerHTML === 'Turkiye'){
        e.target.nextElementSibling.style.color = "#797979";
    }else{
        e.target.previousElementSibling.style.color = "#797979";
    }
    
    
  }
  
      

  return (
    <div>
 <section class="home-tarrifs-section d-flex-container">
    <div class="home-tarrifs-text">
      <div class="home-tarrifs-text-heading">
        <h2>Tariflər</h2>
      </div>

      <div class="home-tarrifs-text-desc text-medium-16">
        <p>Sit vitae felis quis blandit. Proin congue</p>
        <p>tincidunt vitae sollicitudin a ut ut nunc viverra</p>
        <p>Sit eu et quis maecenas. Dui.</p>
      </div>
    </div>

    <div class="home-tarrifs-table">
      <div class="home-tarrifs-countries d-flex text-medium-16">
        <p id="home-turkiye"  onClick={yellowLine}>Turkiye</p>
        <p id="home-amerika"  onClick={yellowLine}>Amerika</p>
        <span id="yellow-underline" class="home-tarrifs-line"  ref={yellowRef} ></span>
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
  </section>



    </div>
  )
}

export default Tarifs