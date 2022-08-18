import React, { useEffect, useRef } from 'react'
import '../Login/Login.css'
import Header from '../Header/Header';
import Footer from '../HomePage/Footer/Footer';
const Login = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };



    return (
        <div>
            <Header />
            <main class="login-page">

                <div class="login-page-heading">
                    <h2>Daxil ol</h2>
                </div>

                <div class="login-page-box d-flex-container">

                    <form action="" method="post">

                        <div class="login-page-email-container">
                            <label class="text-medium-16" for="login-email">
                                E-mail

                                <input class="text-regular-16" type="email" name="email" id="login-email" placeholder="E-mail adresiniz" required />
                            </label>
                        </div>

                        <div class="login-page-password-container">
                            <label class="login-page-password-label text-medium-16 input-password-container" for="login-password">
                                Şifrə

                                <input type={values.showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange("password")}
                                    value={values.password} class="text-regular-16" name="password" id="login-password" placeholder="*********" autoComplete="true"

                                    required />

                                <svg onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} style={{ cursor: "pointer" }} class="password-eye" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 10C6.74182 10 4.90909 8.208 4.90909 6C4.90909 3.792 6.74182 2 9 2C11.2582 2 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 10 9 10ZM9 3.6C7.64182 3.6 6.54545 4.672 6.54545 6C6.54545 7.328 7.64182 8.4 9 8.4C10.3582 8.4 11.4545 7.328 11.4545 6C11.4545 4.672 10.3582 3.6 9 3.6Z" fill="#616161" />
                                </svg>
                            </label>
                        </div>

                        <div class="login-page-forgot-container d-flex-container">

                            <div class="login-page-forgot-password text-regular-12">
                                <p>Şifrəni unutmusunuz ?</p>
                            </div>

                            <div class="login-page-remember-me">
                                <input type="checkbox" name="remember" id="remember" />
                                <label for="remember">
                                    Məni xatırla
                                </label>
                            </div>

                        </div>

                        <div class="login-page-submit">
                            <button type="submit">Daxil ol</button>
                        </div>

                    </form>

                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Login