import styles from "../css/style.module.css";
import TasksList from "./TasksList";
import logo from "../logo.png";
import React from "react";
import { useState, useEffect } from "react";
import {
  addTaskUrl,
  changeTaskStateUrl,
  deleteTaskUrl,
  setTaskDeadlineUrl,
  getAllTasksUrl,
} from "../urls.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Workspace({
  currentWorkspace,
  setCurrentWorkspace,
  nameModal,
  setNameModal,
  setIsLogged,
  workspaces,
  setWorkspaces,
  isCalendarOpened,
  userId,
}) {
  const [, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [, setModalInput] = useState("");
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setTasks(currentWorkspace.tasks);
    setCalendarEvents([])
  }, [currentWorkspace]);

  useEffect(() => {
    if (isCalendarOpened) {
      fetch(`${getAllTasksUrl}/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          data.forEach((element) => {
            setCalendarEvents((currentEvents) => {
              return [
                ...currentEvents,
                { title: element.name, date: element.deadline, backgroundColor: element.deadline === getToday() ? "red" : "lightblue" },
              ];
            });
          });
        });
    }
  }, [isCalendarOpened]);

  const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  async function AddTask() {
    var utc = new Date().toJSON().slice(0, 10);
    const newTask = {
      id: 0,
      name: input === "" ? "Unknown" : input,
      state: "Actual",
      Deadline: utc,
    };
    currentWorkspace.tasks.push(newTask);
    await fetch(addTaskUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentWorkspace),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentWorkspace(data);
        setTasks(data.tasks);
      });
    setInput("");
  }

  async function deleteTask(id) {
    await fetch(`${deleteTaskUrl}/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    let taskArr = currentWorkspace.tasks.filter((task) => task.id !== id);
    currentWorkspace.tasks = taskArr;
    setCurrentWorkspace(currentWorkspace);
    setTasks(currentWorkspace.tasks);
  }

  async function setTaskDate(id) {
    const date = document.getElementById(`deadline${id}`).value;
    await fetch(`${setTaskDeadlineUrl}/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(date),
    })
      .then((response) => response.json())
      .then((data) => {
        let taskArr = currentWorkspace.tasks.map((task) => {
          return task.id === data.id ? data : task;
        });
        currentWorkspace.tasks = taskArr;
        setCurrentWorkspace(currentWorkspace);
        setTasks(currentWorkspace.tasks);
      });
  }

  async function toggleTask(task) {
    if (task.state === "Actual") task.state = "Done";
    else task.state = "Actual";
    await fetch(changeTaskStateUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    let state = task.state;
    setTasks((currentTasks) => {
      return currentTasks.map((tk) => {
        if (tk.id === task.id) {
          return { ...tk, state };
        }
        return tk;
      });
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
    if (isCalendarOpened === false) setNameModal(nameModal ^ 1);
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
      {!isCalendarOpened ? (
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
            setTaskDate={setTaskDate}
          ></TasksList>
        </div>
      ) : (
        <div style={{ margin: "10px 20px" }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={calendarEvents}
            firstDay={"1"}
            height={"90vh"}
          />
        </div>
      )}
    </div>
  );
}

export default Workspace;
