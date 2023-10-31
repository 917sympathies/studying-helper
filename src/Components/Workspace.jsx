import styles from "../css/style.module.css";
import TasksList from "./TasksList";
import logo from "../logo.png";
import React from "react";
import { useState, useEffect } from "react";
import { addTaskUrl, changeTaskStateUrl, deleteTaskUrl } from "../urls.js";

function Workspace({
  currentWorkspace,
  setCurrentWorkspace,
  nameModal,
  setNameModal,
  setIsLogged,
  workspaces,
  setWorkspaces,
}) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [, setModalInput] = useState("");

  useEffect(() => {
      setTasks(currentWorkspace.tasks)
  }, [currentWorkspace]);

  async function AddTask() {
    const newTask = {
      id: 0,
      name: input === "" ? "Unknown" : input,
      state: "Actual",
    };
    currentWorkspace.tasks.push(newTask);
    await fetch(addTaskUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentWorkspace),
    }).then(response => response.json()).then(data => {
      setCurrentWorkspace(data);
      setTasks(data.tasks);
    });
    setInput("");
  }

  async function deleteTask(task) {
    await fetch(deleteTaskUrl, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(task)
    })
    console.log(tasks)
    setTasks(tasks.filter(tk => tk.id !== task.id));
    console.log(tasks)
  }

  async function toggleTask(task){
    if(task.state === "Actual") task.state = "Done";
    else task.state = "Actual";
    await fetch(changeTaskStateUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(task)
    });
    let state = task.state;
    setTasks(currentTasks => {
      return currentTasks.map(tk => {
        if(tk.id === task.id){
          return {...tk, state}
        }
        return tk;
      })
    });
  }

  function changeWorkspaceName(e) {
    currentWorkspace.name = e.target.value;
    setWorkspaces(
      workspaces.map((ws) => {
        if (ws.id === currentWorkspace.id) ws.name = currentWorkspace.name;
        return ws;
      })
    );
    setModalInput([currentWorkspace.name]);
  }

  function openNameModal() {
    const nameInput = document.getElementsByClassName("wpNbModalInput")[0];
    nameInput.value = currentWorkspace.name;
    setNameModal(nameModal ^ 1);
  }

  const selectNameModalText = (e) => {
    e.target.select();
  };

  return (
    <div id="workspace" className={styles.workplace}>
      <nav className={styles.wpnavbar}>
        <div
          id="wpnbinfomodal1"
          className={styles.wpnbinfo}
          onClick={() => openNameModal()}
        >
          <img
            id="wpnbinfomodal1"
            src={logo}
            alt="workplacelogo"
            style={{ marginRight: "6px", height: "17.75px", width: "17.75px" }}
          ></img>
          <div id="wpnbinfomodal1">{currentWorkspace.name}</div>
        </div>
        <div style={{ flexGrow: "1", flexShrink: "1" }} />
        <div className={styles.logoutbtn} onClick={() => setIsLogged(false)}>
          <div>Log out</div>
        </div>
      </nav>
      <div
        id="wpnbinfomodal2"
        className={
          nameModal ? styles.changewsnamemodalhidden : styles.changewsnamemodal
        }
      >
        <img
          id="wpnbinfomodal2"
          src={logo}
          alt="workplacelogo"
          style={{ marginRight: "6px", height: "17.75px", width: "17.75px" }}
        ></img>
        <input
          id="wpnbinfomodal2"
          className="wpNbModalInput"
          type="text"
          placeholder="Untitled"
          onClick={(e) => selectNameModalText(e)}
          onChange={(e) => changeWorkspaceName(e)}
        ></input>
      </div>
      <div className={styles.workplacebody}>
        <div></div>
        <h1 placeholder="Untitled" style={{ marginLeft: "30px" }}>
          <div style={{ textDecoration: "none", color: "inherit" }}>
            {currentWorkspace.name}
          </div>
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "40px",
          }}
        >
          <div className={styles.addtaskbtn} add-task-info="Добавить таск">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => AddTask()}
              style={{ marginRight: "24px" }}
            >
              <path
                id="Vector"
                d="M6 12H12M12 12H18M12 12V18M12 12V6"
                stroke="#000000"
                strokeWidth={"2"}
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Write your task name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <TasksList
          tasks={currentWorkspace.tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        ></TasksList>
      </div>
    </div>
  );
}

export default Workspace;
