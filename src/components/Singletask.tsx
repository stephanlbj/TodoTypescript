import React, { useState } from 'react'
import { Task } from './Utils'
import { BsFillTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { IoCloudDone } from "react-icons/io5";
import Inputfield from './Inputfield';
import { FcCancel } from "react-icons/fc";




type AllProps = {
    
    task:Task;
    Tasks:Task[];
    setTask:React.Dispatch<React.SetStateAction<Task[]>>;
}

//  |
const Singletask = ({task, Tasks, setTask}: AllProps) => {


    


   const [update, setUpdate] = useState(task.task)
    const [ID, setID] = useState<number>(0)

    const UpdateTask = (e:React.FormEvent,Id:number)=>{
e.preventDefault()
      setTask(Tasks.map((item)=> (
        item.id===Id ?{...item,task: update , Is_completed:true} :item
      )))
      setID(0)
     
     }
  
     const UpdateUI = (TaskID:number)=>{
     setID(TaskID)
   } 


 

const Deletetask = (ID:number)=>{
   const Filteredtasks = Tasks.filter((item)=>item.id!=ID)
   setTask(Filteredtasks)
 }

   const CancelUpdate = ()=>{
    setID(0)
}

  return (
    <form
  onSubmit={(e)=>UpdateTask(e, task.id)}
     className={` ${task.Is_completed  ? "bg-green-300" : "bg-gray-300"} 
     w-full my-5 p-2 shadow-xl flex items-center justify-between`}>
   
   {
      ID== task.id ?
    <div  className='w-full flex items-center justify-between space-x-3'>
    <input
    value={update}
    onChange={(e)=>setUpdate(e.target.value)}
    className='w-full p-2 outline-none'
    />
    <div className='flex items-center space-x-3'>
      <button type='submit'>
     
      <IoCloudDone  className='text-green-500 h-5 w-5 cursor-pointer'/>
      </button>
  
  <FcCancel onClick={()=>CancelUpdate()} className='text-red-500 h-5 w-5 cursor-pointer'/>
</div>
    </div>

      :(
        <div  className='w-full flex items-center justify-between space-x-3'>
    
    
    <h1> {task.task}</h1>

<div className='flex items-center space-x-3'>
  <BiEditAlt onClick={()=>UpdateUI(task.id)} className='text-blue-500 h-5 w-5 cursor-pointer'/>
  <BsFillTrashFill onClick={()=>Deletetask(task.id)} className='text-red-500 h-5 w-5 cursor-pointer'/>
</div>

  
 </div> 
      )
    }
   
   
    
    </form>
    )
}

export default Singletask