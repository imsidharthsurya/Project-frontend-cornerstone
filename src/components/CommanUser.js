import React, { useEffect, useState } from 'react'
import axios from "axios"
import ChatComponent from './ChatComponent';
import {useDispatch} from "react-redux"
import { addChat } from '../utils/chatSlice';
const CommanUser = () => {
    const [projectData,setProjectData]=useState([]);
    const [chatData,setChatData]=useState("");
    const dispatch=useDispatch();

    useEffect(()=>{
        const fetchProjects=async()=>{
            const res=await axios.get("http://localhost:8080/projects");
            setProjectData(res.data)
        }

        fetchProjects();
    },[])
  return (
    <div className='w-1/2 mx-auto'>
        <h2 className='text-4xl font-bold m-10'>All Projects: </h2>
        <table className='border border-black'>
            <tr className='border border-black'>
                <th>
                    <p>Project Name</p>
                </th>
                <th>
                    Project Expiry
                </th>
            </tr>
            
                {
                    projectData.map((project)=>{
                      return(<tr key={project.id} className='border border-black'>
                            <td className='p-4'>{project.name}</td>
                            <td className='p-4'>{project.expiry_date}</td>
                        </tr>)
                    })
                }
            
        </table>
        
        <div className='mt-20'>
            <h1 className='text-xl font-bold'>Chat with the admin</h1>
            <ChatComponent/>
            <input type='text' value={chatData} onChange={(e)=>{setChatData(e.target.value)}} className='py-1 px-2 mt-4 border border-black'/>
            <button className='ml-5 mb-40 border border-black bg-green-600 py-1 px-2 text-white' onClick={()=>{
                dispatch(addChat({chat:chatData,user:"User"}))
                setChatData("")
            }}>Send</button>
        </div>
    </div>
  )
}

export default CommanUser