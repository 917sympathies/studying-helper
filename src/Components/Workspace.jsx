import styles from "../css/style.module.css"
import TasksList from "./TasksList";
import logo from "../logo.png";
import React from "react";
import { useState } from "react";

function Workplace({currentWorkspace, nameModal, setNameModal, setIsLogged, workspaces, setWorkspaces}) {
  const [tasks, setTasks] = useState(currentWorkspace.todos);
  const [input, setInput] = useState("");
  const [modalInput, setModalInput] = useState("");
  
  function AddTask() {
    const newTask = { id: crypto.randomUUID(), name: input === ""? "Unknown": input};
    currentWorkspace.todos.push(newTask);
    setTasks([currentWorkspace.todos]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  function changeWorkspaceName(e){
    currentWorkspace.name = e.target.value;
    setWorkspaces(workspaces.map((ws) => {
      if(ws.id === currentWorkspace.id) ws.name = currentWorkspace.name;
      return ws;
    }));
    setModalInput([currentWorkspace.name]);
  }

  return (
    <div id="workplace" className={styles.workplace}>
      <nav className={styles.wpnavbar}>
        <div id="wpnbinfomodal1" className={styles.wpnbinfo} onClick={()=> setNameModal(nameModal^1)}>
          <img
            id="wpnbinfomodal1"
            src={logo}
            alt="workplacelogo"
            style={{ marginRight: "6px", height: "17.75px", width: "17.75px" }}
          ></img>
          <div id="wpnbinfomodal1">{currentWorkspace.name}</div>
        </div>
        <div style={{ flexGrow: "1", flexShrink: "1" }} />
        <div className={styles.logoutbtn} onClick={()=>setIsLogged(false)}>
          <div>Log out</div>
        </div>
      </nav>
      <div id="wpnbinfomodal2" className={nameModal? styles.changewsnamemodalhidden : styles.changewsnamemodal}>
          <img
            id="wpnbinfomodal2"
            src={logo}
            alt="workplacelogo"
            style={{ marginRight: "6px", height: "17.75px", width: "17.75px" }}
          ></img>
          <input id="wpnbinfomodal2" className="wpNbModalInput" type="text" placeholder="Untitled" onChange={(e)=>changeWorkspaceName(e)}></input>
      </div>
      <div className={styles.workplacebody}>
        <div></div>
        <h1 placeholder="Untitled" style={{ marginLeft: "30px" }}>
          <div style={{ textDecoration: "none", color: "inherit" }}>{currentWorkspace.name}</div>
        </h1>
        <div style={{display: "flex", flexDirection: "row", marginBottom: "40px"}}>
          <div className={styles.addtaskbtn} add-task-info="Добавить таск">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>AddTask()}
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
        <TasksList tasks={currentWorkspace.todos} deleteTask={deleteTask}></TasksList>
      </div>
    </div>
  );
}

export default Workplace;
