import React from 'react';
import styles from "../css/style.module.css"

function Task({task, deleteTask, toggleTask}){
    return(
        <div className={styles.task}>
            <div className={styles.taskinfo}>
                <h3 style={{margin: "0", padding: "0"}}><span style={{padding: "4px"}}>{task.name}</span></h3>
                <svg id="addCommentBtn" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="rgb(55,53,47)" strokeWidth={"2"}/>
                </svg>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
            <input type='checkbox' onChange={()=> toggleTask(task)} checked = {task.state === "Actual" ? false : true }></input>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" style={{margin: "6px 4px 6px 4px"}} onClick={()=> deleteTask(task)}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="rgba(25, 23, 17, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                <path d="M14 12V17" stroke="rgba(25, 23, 17, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                <path d="M4 7H20" stroke="rgba(25, 23, 17, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="rgba(25, 23, 17, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="rgba(25, 23, 17, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path> </g>
            </svg>
            </div>
        </div>
    );
}

export default Task;