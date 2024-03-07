import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate=useNavigate()
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=async()=>{
        const response=await axios.post("http://localhost:8080/login",{
            username,
            password
        })
        console.log(JSON.stringify(response.data))
        if(response.data.success && response.data.dt[0].role=="user"){
            navigate("/user")
        }else if(response.data.success && response.data.dt[0].role=="admin"){
            navigate("/admin")
        }else if(response.data.success==false){
            alert("invalid credentials")
        }
        setPassword("")
        setUserName("")
    }
  return (
    <div>
        <label>UserName: <input required className='border border-black p-1' type='text' value={username} onChange={(e)=>setUserName(e.target.value)} /></label>
        <br/><br/>
        <label>UserName: <input required className='border border-black p-1' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
        <br/><br/>
        <button onClick={handleLogin} className='p-2 bg-green-300 border border-black'>Login</button>
   
    </div>
  )
}

export default Login