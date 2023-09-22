import styles from './style.module.css'
import TasksList from './TasksList';
import logo from "./logo.png"
import React from 'react';
import {useState} from 'react'

function Workplace(){
    const [tasks, setTasks] = useState([]);

    function AddTask(){
        setTasks((currentTasks) => {
            return[
                ...currentTasks,
                {id: crypto.randomUUID(), name: "Unknown"},
            ]
        })
    }

    return(
        <div className={styles.workplace}>
        <nav className={styles.wpnavbar}>
          <div className={styles.wpnbinfo}>
            <img src={logo} alt="workplacelogo" style={{marginRight: "6px", height: "17.75px", width: "17.75px"}}></img>
            <div>WorkplaceName</div>
          </div>
          <div style={{flexGrow: "1", flexShrink: "1"}}/>
        </nav>
        <div className={styles.workplacebody}>
          <div></div>
          {/* <h1 placeholder="Untitled" contentEditable="true" style={{marginLeft: "30px"}}> */}
          <h1 placeholder="Untitled" style={{marginLeft: "30px"}}>
            <span style={{textDecoration: "none", color: "inherit"}}>AGH</span>
          </h1>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={AddTask}>
            <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#000000" strokeWidth={"2"}/>
          </svg>
          <TasksList tasks={tasks}></TasksList>
        </div>
      </div>
    );
}

export default Workplace;