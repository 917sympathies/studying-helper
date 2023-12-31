import styles from "../css/style.module.css"
import React from "react";
import Task from "./Task";

function TasksList({tasks, deleteTask, toggleTask, setTaskDate}) {
  return (
    <div className={styles.taskslist}>
      {tasks.map((task) => {
        return <Task key={task.id} task = {task} deleteTask = {deleteTask} toggleTask = {toggleTask} setTaskDate={setTaskDate}></Task>;
      })}
    </div>
  );
}

export default TasksList;
