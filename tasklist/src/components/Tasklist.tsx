
import React from "react";

//Interfaces
import {ITask} from '../interfaces/Task'
import Styles from './Tasklist.module.css'

//css 



interface Props {
  taskList: ITask[]
  handleDelate(id:number):void
  handleEdit(task:ITask):void
}

const TaskList = ({taskList,handleDelate,handleEdit}:Props) => {
    return (
        <>
         {taskList.length > 0 ? (
            taskList.map((task,index)=> (
              <div key={task.id} className={Styles.task}>
                <div className={Styles.details} >
                  <h4>{task.title}</h4>
                  <p>Dificuldade: {task.difficulty}</p>
                </div>  
                  <div className={Styles.actions}>
                    <i className="bi bi-pencil" onClick={() =>handleEdit(task) } ></i>
                    <i className="bi bi-trash" onClick={() => {handleDelate(task.id)}}></i>
                  </div>
              </div>
            ))
         ):  (
          <p>Não há Tarefas cadastradas!!</p>
         )}
        </>
    )
}

export default TaskList