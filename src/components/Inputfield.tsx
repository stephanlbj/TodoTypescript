import React from 'react'
import Btncompo from './Btncompo'

interface Props{
    task:string
    seTtask:React.Dispatch<React.SetStateAction<string>>
    Btnclick:(e:React.FormEvent<HTMLFormElement>)=>void
}

const Inputfield = ({task , seTtask, Btnclick }:Props) => {


   

  return (
 <div >
  <form onSubmit={Btnclick} className='w-full flex items-center space-x-2'>
     <input 
     value={task}
     onChange={(e)=>seTtask(e.target.value)}
     placeholder='Enter a Task...'
     className='w-full outline-none px-2 py-3 rounded-full'
      />
     <Btncompo/>
  </form>
 </div>     
  )
}

export default Inputfield