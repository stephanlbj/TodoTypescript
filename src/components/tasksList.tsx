import React, { useState } from 'react'
import Singletask from './Singletask'
import { Task } from './Utils'

interface Props {
  TaskList:Task[]
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>
}

const TasksList = ({TaskList,setTasks}:Props) => {



  return (
    <div className='my-14 w-9/12 sm:w-7/12 md:w-8/12 lg:w-6/12 mx-auto'>
     {
        TaskList.length > 0 ?
        (
          TaskList.map((task)=>(
         <Singletask
         key={task.id}
         task={task} 
         Tasks={TaskList}
         setTask={setTasks}/>
        ))
        )
        :
        <h1 className='text-xl text-center'>No task at this moment.</h1>
      }
       
    </div>
  )
}

export default TasksList