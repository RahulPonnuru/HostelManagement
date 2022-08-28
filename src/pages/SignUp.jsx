import { useState } from "react";
import  Axios  from "axios";

const SignUp=()=>{
    const addToList=()=>{
        Axios.post("http://localhost:5000/insertSignUp",{
            name:name,
            mail:mail,
            password:password
        });
    }
    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [password,setPassword]=useState("");
    const changeName=(event)=>{
        setName(event.target.value);
    }
    const changeMail=(event)=>{
        setMail(event.target.value);
    }
    const changePassword=(event)=>{
        setPassword(event.target.value);
    }
    const saveSignUp=()=>{
        addToList();
    }
    return(
        <div>
            <div className='signUp'>
            <h2 className="loginTitle">Choose a login method</h2>
            <div className="wrapperSign">
                <div className="form">
                        <input type="text" onChange={changeName} placeholder="Enter your name"></input>
                        <input type="text" onChange={changeMail}  placeholder="Enter your mailID"></input>
                        <input type="password" onChange={changePassword} placeholder="Enter your password"></input>
                        <br/>
                        <button onClick={saveSignUp} className="signUpBtn">SignUp</button>

                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp;