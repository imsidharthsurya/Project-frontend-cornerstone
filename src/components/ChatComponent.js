import React from 'react'
import {useSelector} from "react-redux"
const ChatComponent = () => {
  const chatData=useSelector((store)=>store.chat.chats)   
  return (
    <div>
      <ul>
        {
          chatData.map((chat,index)=>{
           return <li key={index}><span className='font-bold'>{chat.user}</span> {chat.chat}</li>
          })
        }
      </ul>
    </div>
  )
}

export default ChatComponent