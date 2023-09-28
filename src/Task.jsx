import React from 'react';
import styles from './style.module.css'

function Task(props){
    return(
        <div className={styles.task}>
            <div className={styles.taskinfo}>
                <h3 style={{margin: "0", padding: "0"}}><span style={{padding: "4px"}}>{props.name}</span></h3>
                <svg id="addCommentBtn" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="rgb(55,53,47)" strokeWidth={"2"}/>
                </svg>
            </div>
            <input type='checkbox' onChange={()=> props.deleteTask(props.id)}></input>
        </div>
    );
}

export default Task;