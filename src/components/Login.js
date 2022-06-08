import React, { useState } from 'react'
import Home from './Home';

export default function Login() {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [Alogin,setLogin]=useState(false);
        const login={admin:"admin@gmail.com",password:"1234"};
        const handleClick=()=>{
                if(email===login.admin&&password===login.password){
                    setLogin(true);
                }else{
                    window.alert("Invalid User")
                }
        }

  return(
      <>
      {Alogin?(<><Home/></>):(<form className='login-form' onSubmit={e=>e.preventDefault()}>
                <label>Enter Email id : </label>
                <input placeholder='admin@gmail.com' type="email" value={email} onChange={e=>setEmail(e.target.value)} required /><br></br>
                <label>Enter Email id : </label>
                <input placeholder='1234' type="password" value={password} onChange={e=>setPassword(e.target.value)} required/><br></br>
                <button onClick={handleClick}>Login</button>
            </form>)}
           
      </>
  )
}
