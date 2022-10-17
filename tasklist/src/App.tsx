import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Styles from './components/App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/Tasklist';
import Modal from './components/Modal'

//Interface
import { ITask } from './interfaces/Task';



function App() {

  const [taskList,setTaskList] = useState<ITask[]>([])

  const [taskToupdtate, setTaskToUpdate] = useState<ITask | null>(null)
  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
         return  task.id !== id
      })
    )

  }
  const  hideOrShowModal = (display:boolean) => {
     const modal = document.querySelector("#modal")
     if(display) {
      modal!.classList.remove("hide")

     } else {
      modal!.classList.add("hide")
     }
  }

  const editTask = (task:ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id:number, title:string,difficulty:number) => {

    const updateTask:ITask = {id, title, difficulty}

    const updatedItems:any = taskList.map((task)=> {
       return task.id === updateTask.id ? updateTask : task
    })
    setTaskList(updatedItems)
    hideOrShowModal(false)
  }
   
  return (
    <div className="App">
      <Modal children={<TaskForm btnText="Editar Tarefa " taskList={taskList} task={taskToupdtate} handleUpdate={updateTask}/>}/>
     <Header/>

        <main className={Styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
            <p>Formulario</p>

          </div>
          <div>
            <h2>Suas Tarefas:</h2>
            <TaskList taskList={taskList} handleDelate={deleteTask} handleEdit={editTask}/>
          </div>
        </main>

         <Footer/>
       
      </div>
      
    
  );
}

export default App;
