import React , {useRef} from 'react';
import '../Services/Services.css'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer'
const Services = () => {

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
    
    if(e.target.innerHTML === 'Sifariş et'){
      e.target.nextElementSibling.style.color = "#797979";
  }else if(e.target.innerHTML === 'Bağlamaların daşınması'){
      e.target.previousElementSibling.style.color = "#797979";
      e.target.nextElementSibling.style.color = "#797979";
  }else{
    e.target.previousElementSibling.style.color = "#797979";
}
  }
  






  return (
    <div>
      <Header />

      <main class="services-page-section d-flex-container">

        <div class="services-page-left">
          <h2>Xidmətlərimiz</h2>
        </div>

        <div class="services-page-right">

          <div class="services-page-header d-flex">

            <p class="text-medium-16"  onClick={yellowLine}>Sifariş et</p>
            <p class="text-medium-16" onClick={yellowLine}>Bağlamaların daşınması</p>
            <p class="text-medium-16" onClick={yellowLine}>Bağlamaların daşınması</p>
            <span id="yellow-underline" ref={yellowRef}></span>

          </div>


          <div class="services-page-content-container">
            <p class="services-page-content-1 text-regular-16">
              Ullamcorper lectus suspendisse dis faucibus et. Massa sed netus vel sed orci. Duis non mattis vitae feugiat
              nulla a neque. <span>Sed leo semper donec</span> habitant non arcu. Eget adipiscing est consectetur ut
              integer. Magnis porta sed vitae eu, lectus. Ac lectus eget lectus sed. Tellus feugiat amet non proin nulla.
              Penatibus facilisi senectus malesuada dolor massa auctor
            </p>
            <p class="services-page-content-1 text-regular-16">
              Eu vestibulum ut mauris sed risus id. In amet quis lobortis et. Dui nunc malesuada tincidunt porta nulla. Odio
              risus sit diam pellentesque leo ut laoreet etiam sit. In at vestibulum turpis et hendrerit sit. Ultrices est a
              sollicitudin nec viverra felis, ultrices semper quis. Tristique tincidunt risus est, aliquet aliquam in id
              auctor. Quam tincidunt scelerisque in integer varius ullamcorper nulla. Blandit lectus ut fermentum arcu
              pretium consectetur mauris id. Tempor eu justo vel tortor.
            </p>
            <p class="services-page-content-1 text-regular-16">
              Aliquet diam vehicula donec quis. Duis urna, at tempor fames rhoncus vitae. Nulla eget sed etiam in et
              quisque. Commodo suspendisse tellus pellentesque lectus fermentum ac nec. Et in ullamcorper leo integer in
              lorem pellentesque leo. In nulla cras amet, ultricies et nunc feugiat.
            </p>
            <p class="services-page-content-1 text-regular-16">
              Eleifend quam nunc adipiscing libero imperdiet viverra nunc. Luctus et enim tempor, dolor mauris nunc a
              tellus.
            </p>



            <div class="services-page-content-1 d-none text-regular-16">
              Ullamcorper lectus suspendisse dis faucibus et. Massa sed netus vel sed orci. Duis non mattis vitae feugiat
              nulla a neque. Sed leo semper donec habitant non arcu. Eget adipiscing est consectetur ut integer. Magnis
              porta sed vitae eu, lectus. Ac lectus eget lectus sed. Tellus feugiat amet non proin nulla. Penatibus facilisi
              senectus malesuada dolor massa auctor
              Eu vestibulum ut mauris sed risus id. In amet quis lobortis et. Dui nunc malesuada tincidunt porta nulla. Odio
              risus sit diam pellentesque leo ut laoreet etiam sit. In at vestibulum turpis et hendrerit sit. Ultrices est a
              sollicitudin nec viverra felis, ultrices semper quis. Tristique tincidunt risus est, aliquet aliquam in id
              auctor. Quam tincidunt scelerisque in integer varius ullamcorper nulla. Blandit lectus ut fermentum arcu
              pretium consectetur mauris id. Tempor eu justo vel tortor.
              Aliquet diam vehicula donec quis. Duis urna, at tempor fames rhoncus vitae. Nulla eget sed etiam in et
              quisque. Commodo suspendisse tellus pellentesque lectus fermentum ac nec. Et in ullamcorper leo integer in
              lorem pellentesque leo. In nulla cras amet, ultricies et nunc feugiat.
              Eleifend quam nunc adipiscing libero imperdiet viverra nunc. Luctus et enim tempor, dolor mauris nunc a
              tellus.
            </div>

            <div class="services-page-content-1 d-none text-regular-16">
              Ullamcorper lectus suspendisse dis faucibus et. Massa sed netus vel sed orci. Duis non mattis vitae feugiat
              nulla a neque. Sed leo semper donec habitant non arcu. Eget adipiscing est consectetur ut integer. Magnis
              porta sed vitae eu, lectus. Ac lectus eget lectus sed. Tellus feugiat amet non proin nulla. Penatibus facilisi
              senectus malesuada dolor massa auctor
              Eu vestibulum ut mauris sed risus id. In amet quis lobortis et. Dui nunc malesuada tincidunt porta nulla. Odio
              risus sit diam pellentesque leo ut laoreet etiam sit. In at vestibulum turpis et hendrerit sit. Ultrices est a
              sollicitudin nec viverra felis, ultrices semper quis. Tristique tincidunt risus est, aliquet aliquam in id
              auctor. Quam tincidunt scelerisque in integer varius ullamcorper nulla. Blandit lectus ut fermentum arcu
              pretium consectetur mauris id. Tempor eu justo vel tortor.
              Aliquet diam vehicula donec quis. Duis urna, at tempor fames rhoncus vitae. Nulla eget sed etiam in et
              quisque. Commodo suspendisse tellus pellentesque lectus fermentum ac nec. Et in ullamcorper leo integer in
              lorem pellentesque leo. In nulla cras amet, ultricies et nunc feugiat.
              Eleifend quam nunc adipiscing libero imperdiet viverra nunc. Luctus et enim tempor, dolor mauris nunc a
              tellus.
            </div>



          </div>


        </div>

      </main>
     <Footer/>
    </div>
  )
}

export default Services