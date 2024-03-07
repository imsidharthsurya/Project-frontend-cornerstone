import React, { useState } from 'react'
import axios from "axios"
import ChatComponent from './ChatComponent';
import {useDispatch} from "react-redux"
import { addChat } from '../utils/chatSlice';


const AdminPage = () => {
    const [project,setProject]=useState(null);
    const [projectName,setProjectName]=useState("");
    const [projectExpiry,setProjectExpiry]=useState("")
    const [chatData,setChatData]=useState("");
    const dispatch=useDispatch();

    const handleProjectChange=(e)=>{
        setProject(e.target.files[0]);
    }
    const handleProjectName=(e)=>{
        setProjectName(e.target.value)
    }
    const handleProjectExpiry=(e)=>{
        setProjectExpiry(e.target.value)
    }
    const handleProjectUpload=async()=>{
        try{
            const formData=new FormData();
            formData.append('file',project);
            console.log("form data is: ",JSON.stringify(formData))
            await axios.post(`http://localhost:8080/upload?name=${projectName}&expirydate=${projectExpiry}`,formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
        
            alert("Project uploaded successfully")
        }catch(err){
            console.log("error while uploading file",err.message)
        }
    }
  return (
    <div className='w-1/2 mx-auto'>
        Project Name:<input type='text' className='border border-black m-10' value={projectName} onChange={handleProjectName}/><br/>
        Project Expiry Date:<input type='date' className='border border-black ml-3 mb-10' value={projectExpiry} onChange={handleProjectExpiry}/><br/>
        <input type='file' onChange={handleProjectChange}/><br/><br/>
        
        <button onClick={handleProjectUpload} className='ml-10 bg-green-400 py-4 px-3 border border-black rounded-lg'>Upload Project</button>

        <div className='mt-20'>
            <h1 className='text-xl font-bold'>Chat with the User</h1>
            <ChatComponent/>
            <input type='text' value={chatData} onChange={(e)=>{setChatData(e.target.value)}} className='py-1 px-2 mt-4 border border-black'/>
            <button className='ml-5 mb-40 border border-black bg-green-600 py-1 px-2 text-white' onClick={()=>{
                dispatch(addChat({chat:chatData,user:"Admin"}))
                setChatData("")
            }}>Send</button>
        </div>
    
    </div>
  )
}

export default AdminPage