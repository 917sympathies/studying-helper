import React from 'react';
import styles from './style.module.css'

function Task(props){
    return(
        <div className={styles.task}>
            <span>{props.name}</span>
        </div>
    );
}

export default Task;