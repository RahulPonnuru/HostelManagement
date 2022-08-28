import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App=()=>{
  const [user,setUser]=useState(null);
  useEffect(()=>{
    const getUser=()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials":true,
        },
      }).then((response)=>{
        if(response.status===200) return response.json();
        throw new Error("authentication has been failed");
      }).then(resObject=>{
        setUser(resObject.user);
      }).catch(err=>{
        console.log(err);
      })
    }
    getUser();
  },[]);
  console.log(user);
  return(
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={user?<Navigate to='/' /> : <Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;