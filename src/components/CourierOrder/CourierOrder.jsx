import React ,{useRef , useEffect} from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import '../CourierOrder/CourierOrder.css'
const CourierOrder = () => {
    const witdhRef = useRef()
    useEffect(() => {
        witdhRef.current.style.width = "100px"

    })

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
      
      if(e.target.innerHTML === 'Butun'){
        e.target.nextElementSibling.style.color = "#797979";
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "#797979";

    }else if(e.target.innerHTML === 'Sebet'){
        e.target.previousElementSibling.style.color = "#797979";
        e.target.nextElementSibling.style.color = "#797979";
        e.target.nextElementSibling.nextElementSibling.style.color = "#797979";
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "#797979";


    }else if(e.target.innerHTML === 'Odenildi'){
        e.target.previousElementSibling.style.color = "#797979";
        e.target.nextElementSibling.style.color = "#797979";
    }
    else if(e.target.innerHTML === 'Sifaris verildi'){
        e.target.previousElementSibling.style.color = "#797979";
        e.target.nextElementSibling.style.color = "#797979";
    }
    
    else{
      e.target.previousElementSibling.style.color = "#797979"
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "#797979";
      ;
  }
    }
    
     
  return (
    
    <div>
<Header/>
<main class="profile-page">

<div class="profile-left">
    <div class="profile-user">
        <h2>Nigar Aliyeva </h2>
        <p>ID: xxxxxxx</p>
    </div>

    <div class="profile-categories">
        <ul>
            <li class="text-regular-16">B??y??natlar/Ba??lamalar</li>
            <li class="text-regular-16">Hesablama kalkulyatoru</li>
            <li class="text-regular-16">Sifari?? Et/Qap??da ??d??m??</li>
            <li class="text-regular-16">Balans??m</li>
            <li class="text-regular-16">Etibarnam??l??r</li>
            <li class="text-regular-16">??d??ni??l??r tarixc??si</li>
            <li class="text-regular-16">Xarici ??nvanlar</li>
            <li class="text-regular-16">Borclar</li>
            <li class="text-regular-16">Cashback</li>
            <li class="text-regular-16">Promo kod</li>
            <li class="text-regular-16">M??raci??tl??rim</li>
            <li class="text-regular-16">X??rit??</li>
            <li class="text-regular-16">??laq??li hesablara</li>


            <div style={{ display: "flex", flexDirection: "column" }}>
                                <li class="text-regular-16" id='beyan'>Kuryer sifari??l??rim</li>
                                <span className='balans-span'></span>
                            </div>
            <li class="text-regular-16">????xsi m??lumatlar??m</li>
            <li class="text-regular-16">????x????</li>
        </ul>
    </div>
</div>

<div class="profile-right">

    <div class="profile-header">
        <div class="profile-header-tab">
            <span class="text-regular-16">Dasinma balansi</span>
            <p class="text-semibold-16">0.00AZN</p>
        </div>

        <div class="profile-header-tab">
            <span class="text-regular-16">Sifaris et balansi</span>
            <p class="text-semibold-16">0.00AZN</p>
        </div>

        <div class="profile-header-tab">
            <span class="text-regular-16">Limit</span>
            <p class="text-semibold-16">0$</p>
        </div>

        <div class="profile-header-tab">
            <span class="text-regular-16">Baglama sayi</span>
            <p class="text-semibold-16">0</p>
        </div>
    </div>
    <div class="profile-yeni-muraciet" id='yenikuryer'>
        <div>
            <button class="text-medium-14" id='kuryer'>Yeni kuryer sifarisi</button>
        </div>
    </div>
  

    <div class="profile-sifarisher-category" id='sifaris'>
                        <p class="underline" id='btm' onClick={yellowLine}>Butun</p>
                        <p class="underline" id='btm' onClick={yellowLine}>Sebet</p>
                        <p class="underline" id='btm' onClick={yellowLine}>Odenildi</p>
                        <p class="underline" id='btm' ref={witdhRef} onClick={yellowLine}>Sifaris verildi</p>
                        <p class="underline" id='btm'  onClick={yellowLine} >Silindi</p>
                        <span id="yellow-underline" className="home-tarrifs-line" ref={yellowRef}></span>
                    </div>
    <div class="profile-muracietler-table">
        <table class="GeneratedTable">
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Mehsulun adi</th>
                    <th>Miqdar</th>
                    <th>Olcu</th>
                    <th>Reng</th>
                    <th>Qiymet</th>
                    <th>Miqdar</th>
                    <th>TD kargo (Tl)</th>
                    <th>Cem</th>
                    <th>Etrafli</th>
                    <th>Tarix</th>
                    <th>Action</th>
                    <th>Ode</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>Pending</td>
                  
                </tr>
                <tr>
                <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>Pending</td>
                  
                </tr>
                <tr>
                <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>Pending</td>
                   
                </tr>
                <tr>
                <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>Pending</td>
                  
                </tr>
                <tr>
                <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>3439876</td>
                    <td>$30.00</td>
                    <td>Pending</td>
                    <td>Pending</td>
                  
                </tr>
            </tbody>
        </table>
    </div>

</div>

</main>
<Footer/>
    </div>
  )
}

export default CourierOrder