import styles from "./style.module.css";
import TasksList from "./TasksList";
import logo from "./logo.png";
import React from "react";
import { useState } from "react";

function Workplace() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function AddTask() {
    setTasks((currentTasks) => {
      return [...currentTasks, { id: crypto.randomUUID(), name: input === ""? "Unknown": input}];
    });
    setInput("");
  }

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <div id="workplace" className={styles.workplace}>
      <nav className={styles.wpnavbar}>
        <div className={styles.wpnbinfo}>
          <img
            src={logo}
            alt="workplacelogo"
            style={{ marginRight: "6px", height: "17.75px", width: "17.75px" }}
          ></img>
          <div>WorkplaceName</div>
        </div>
        <div style={{ flexGrow: "1", flexShrink: "1" }} />
      </nav>
      <div className={styles.workplacebody}>
        <div></div>
        <h1 placeholder="Untitled" style={{ marginLeft: "30px" }}>
          <span style={{ textDecoration: "none", color: "inherit" }}>AGH</span>
        </h1>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div className={styles.addtaskbtn} data-tooltip="Добавить таск">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={AddTask}
            style={{marginRight: "24px"}}
          >
            <path
              id="Vector"
              d="M6 12H12M12 12H18M12 12V18M12 12V6"
              stroke="#000000"
              strokeWidth={"2"}
            />
          </svg>
          </div>
          <input type="text" placeholder="Write your task name" value={input} onChange={e => setInput(e.target.value)}></input>
        </div>
        <TasksList tasks={tasks} deleteTask={deleteTask}></TasksList>
      </div>
    </div>
  );
}

export default Workplace;
