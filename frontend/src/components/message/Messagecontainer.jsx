import React from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import {TiMessages} from "react-icons/ti"

const Messagecontainer = () => {
    const nochat = false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
      {nochat?(<Nochatselected/>):(
        <>
        {/* header */}
      <div className=' bg-slate-500 px-4 py-2 mb-2'> 
            <span className=' label-text '>To</span> <span className='text-gray-900 font-bold'>Unkown</span>
      </div>
      <Messages/>
      <Messageinput/>
        </>
      )}
      </>
    </div>
  )
}

export default Messagecontainer

const Nochatselected = ()=>{
    return(
        <>
        <div className='flex items-center justify-center w-full h-full'>
            <div className=' px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 '>
                <p>Welcome unkown</p>
                <p>select a chat to messing </p>
                <TiMessages className=" text-3xl md:text-6xl text-center" />
            </div>
        </div>
        </>
    )
}

 
