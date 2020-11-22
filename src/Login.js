import React from 'react'
import '../src/css/login.css'
import { loginurl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo" />
            <a href={loginurl} className="">LOGIN WITH SPOTIFY</a >
        </div>
    )
}

export default Login
