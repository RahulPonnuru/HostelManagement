import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import {Link} from "react-router-dom";
import '../App.css';
import { useState } from 'react';
import  Axios  from 'axios';

const Login=()=>{
    const addToList=()=>{
        Axios.post("http://localhost:5000/insert",{
            mail:mail,
            password:password
        });
    }
    const google=()=>{
        window.open("http://localhost:5000/auth/google","__self")
    }
    const facebook=()=>{
        window.open("http://localhost:5000/auth/facebook","__self")
    }
    const [mail,setMail]=useState("");
    const [password,setPassword]=useState("");
    const changeMail=(event)=>{
        setMail(event.target.value);  
    }
    console.log(mail);
    const changePassword=(event)=>{
        setPassword(event.target.value);
    }

    const sendDetails=()=>{
        if(mail.length===0 && password.length===0){
            alert("Enter your crendentials properly");
        }else{
            addToList();
        }
    }

    return(
        <div className='login'>
            <h2 className="loginTitle">Choose a login method</h2>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="google" className='icon' />
                        Google
                    </div>
                    <div className="loginButton facebook"  onClick={facebook}>
                        <img src={Facebook} alt="google" className='icon' />
                        Facebook
                    </div>
                    <div className="loginButton instagram">
                        <img src={Instagram} alt="google" className='icon' />
                        Instagram
                    </div>
                </div>
                <div className='center'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                </div>
                <div className='right'>
                    <input type="text" onChange={changeMail} placeholder='Username'></input>
                    <input type="text" onChange={changePassword}  placeholder='Password'></input>
                    <button className='submit' onClick={sendDetails}>Login</button>
                    <p className='notSignIn'>Don't have an account? <Link className='link' to="/signUp">SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;