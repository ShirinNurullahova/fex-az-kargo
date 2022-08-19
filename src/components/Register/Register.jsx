import React , {useState} from 'react'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
import DropDown3 from './DropDown3/DropDown3';
import DropDown4 from './DropDown4/DropDown4';
import '../Register/Register.css'
const Register = () => {
    const [selected3 , setSelected3] =useState("Cins")
    const [selected4 , setSelected4] =useState("Filial")
    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
  });
 
  const [values1, setValues1] = React.useState({
    password1: "",
    showPassword1: false,
});

   
  const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowPassword1 = () => {
    setValues1({ ...values1, showPassword1: !values1.showPassword1 });
};
const handleMouseDownPassword1 = (event) => {
  event.preventDefault();
};


  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
  };

  const handlePasswordChange1 = (prop) => (event) => {
    setValues1({ ...values1, [prop]: event.target.value });
};

  return (
    <div>
     <Header/>
     <section class="register-section">
      <h2 class="register-title">Qeydiyyat</h2>
      <form class="register-form" action="POST">
        <div class="register-form-inputs d-flex-container">
          <label class="register-form-label text-medium-16">
            Adiniz
            <input type="text" />
          </label>
          <label class="register-form-label text-medium-16">
            Soyadiniz
            <input type="text" />
          </label>
          <label class="register-form-label text-medium-16">
            Telefon nömrəsi
            <input type="tel" placeholder="+994(__) ___ __ __" />
          </label>
          <label class="register-form-label text-medium-16">
            Email
            <input type="email" placeholder="example@.com" />
          </label>
          <label class="register-form-label text-medium-16">
            Doğum tarixi
            <input type="date" class="cursor" placeholder="__/__/____" />
          </label>
          <div class="input d-flex input-country text-medium-16" id='mesafe'>
            <label for="gender" className='cins'>Cins</label>
            <DropDown3 selected3={selected3} setSelected3={setSelected3}/>

          </div>
          <label class="register-form-label text-medium-16">
            Seriya nömrəsi
            <input type="text" placeholder="AZE _ _ _ _ _ _ _ _" />
          </label>
          <label class="register-form-label text-medium-16">
            Fərdi İdentifikasiya
            <input type="text" placeholder="" />
          </label>
          <div class="input d-flex input-country text-medium-16" id='mesafe'>
            <label for="gender" className='cins'>Filial</label>
            <DropDown4 selected4={selected4} setSelected4={setSelected4}/>

          </div>
          <label class="register-form-label text-medium-16">
            Ünvan
            <input type="text" placeholder="" />
          </label>
          <label class="register-form-label password-label text-medium-16">
            Şifrə
            <div class="input-password-container d-flex-container">
              <input type={values.showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange("password")}
                                    value={values.password}
                class="type-password"
          
                placeholder="**********"
              />
              <svg  onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                class="visible-svg pointer"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 10C6.74182 10 4.90909 8.208 4.90909 6C4.90909 3.792 6.74182 2 9 2C11.2582 2 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 10 9 10ZM9 3.6C7.64182 3.6 6.54545 4.672 6.54545 6C6.54545 7.328 7.64182 8.4 9 8.4C10.3582 8.4 11.4545 7.328 11.4545 6C11.4545 4.672 10.3582 3.6 9 3.6Z"
                  fill="#616161"
                />
              </svg>
            </div>
          </label>
          <label class="register-form-label password-label text-medium-16">
            Şifrənin təkrarı
            <div class="input-password-container d-flex-container">
              <input   type={values1.showPassword1 ? "text" : "password"}
                                    onChange={handlePasswordChange1("password")}
                                    value1={values1.password1}
                class="type-password"
        
                placeholder="**********"
              />
              <svg  onClick={handleClickShowPassword1}
                                    onMouseDown={handleMouseDownPassword1}
                width="18"
                class="visible-svg pointer"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 10C6.74182 10 4.90909 8.208 4.90909 6C4.90909 3.792 6.74182 2 9 2C11.2582 2 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 10 9 10ZM9 3.6C7.64182 3.6 6.54545 4.672 6.54545 6C6.54545 7.328 7.64182 8.4 9 8.4C10.3582 8.4 11.4545 7.328 11.4545 6C11.4545 4.672 10.3582 3.6 9 3.6Z"
                  fill="#616161"
                />
              </svg>
            </div>
          </label>
          <label
            for="chckbtn"
            class="text-regular-12 checkbox d-flex-container pointer"
          >
            <input type="checkbox" name="" id="chckbtn" />
            Şərtləri qəbul edirəm <a href="№">Şərtləri oxu</a>
          </label>
        </div>
        <button class="text-medium-14">Qeydiyyat</button>
      </form>
    </section>



<Footer/>
    </div>
  )
}

export default Register