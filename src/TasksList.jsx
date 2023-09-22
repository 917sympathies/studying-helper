import styles from "./style.module.css";
import React from "react";
import Task from "./Task";

function TasksList(props) {
  return (
    <div className={styles.taskslist}>
      {props.tasks.map((task) => {
        return <Task key={task.id} name={task.name}></Task>;
      })}
    </div>
  );
}

export default TasksList;
