import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksList from './components/tasksList';
import Inputfield from './components/Inputfield';
import { Task } from './components/Utils';



function App() {

  const [task , seTtask]=  useState("")
  const [Tasks , setTasks] = useState<Task[]>([])

const Btnclick = (e:React.FormEvent<HTMLFormElement>) =>{
e.preventDefault()

if(!task)
return alert("Please, you should provide a Task!!")

setTasks([...Tasks, {id:Date.now(),task, Is_completed:false}])
seTtask("")
}


  return (
    <div className='w-full'>
      <div className='flex justify-center items-center mt-20'>
<h1 className='text-2xl text-center'>Todo List using Typescript</h1>
      </div>

      <div className='bg-yellow-500 border border-gray-300 rounded-full p-2 mt-10 w-9/12 sm:w-7/12 md:w-8/12 lg:w-6/12 mx-auto '>
    <Inputfield task={task} seTtask={seTtask} Btnclick={Btnclick} />
    </div>
    <TasksList TaskList={Tasks} setTasks={setTasks}/>
    
    </div>
  );
}

export default App;
