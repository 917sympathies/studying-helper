import styles from "../css/style.module.css"
import React from "react";
import Task from "./Task";

function TasksList(props) {
  return (
    <div className={styles.taskslist}>
      {props.tasks.map((task) => {
        return <Task key={task.id} {...task} deleteTask = {props.deleteTask}></Task>;
      })}
    </div>
  );
}

export default TasksList;
