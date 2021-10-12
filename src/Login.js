import { domain } from 'process';
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function Login(){
    return(
        <div className = 'Login'>
        <Link to = '/'>
            <img className='login__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG21.png' alt=""/>
        </Link>
            <div className = 'login__container'>
                <h1>Sign -in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type = 'text'/>
                    
                    <h5>Password</h5>
                    <input type = 'password'/>

                    <button className = 'login__SignInButton'>
                        Sign In
                    </button>
                </form>
                <p>
                    By signing - in you agree to the amazon clone fake conditions of use & sale.
                    Please notice our Privacy terms , Cookies terms & Interest based ads.
                </p>
                <button className = 'login__RegisterButton'>
                    Create your Amazon Account
                </button>
            </div>
        </div>

    )
}
export default Login;