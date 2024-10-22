import React from 'react';
import RegisterForm from "./RegisterForm";


import "../../../styles/shared.css";
import "../../../styles/register-style.css"

function Register() {
    return(
        <div id="registerPage">
            <div id="space"></div>
            <RegisterForm/>
        </div>
    )
}

export default Register;