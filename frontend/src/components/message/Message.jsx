import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {
  console.log(message)
  const {authuser}=useAuthContext()
  // console.log(authuser)
  // console.log(authuser)
  // console.log(authuser._id)

  const {selectedConversation}=useConversation();
  // console.log(selectedConversation.fullname)
  const fromMe = message.senderId === authuser._id;
  // console.log(message.senderId)
  // console.log(fromMe)
  const chatClassName = fromMe ? 'chat-end': 'chat-start';
  const profilePic = fromMe ? authuser.profilepic : selectedConversation.profilepic;
  const bgcolor = fromMe ? 'bg-blue-500': "";
  const name = !fromMe?selectedConversation.fullname : authuser.fullname
  return (
    <div>
  
<div className={`chat  ${chatClassName}`} >
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={profilePic} />
    </div>
  </div>
  <div className="chat-header">
    {name}
  </div>
  <div className={`chat-bubble  text-white ${bgcolor}`}>{message.messages}</div>
  
    <time className="text-xs opacity-50">20:20</time>
</div>
    </div>
  )
}

export default Message
