import styles from "./style.module.css"
import logo from "./logo.png"
import React from 'react'
import { Link } from "react-router-dom";
import Workplace from "./Workplace";

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarheader}>
          <div className={styles.nbheaderuser}>
            <img style={{height: "24px", width: "24px"}}  src={logo} alt="logo"></img>
            <span style={{margin: "0px 12px", overflow: "hidden", flexGrow: "1"}}>Username</span>
          </div>
          <div style={{paddingTop: "5px"}}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="rgba(55,53,47, 0.45)" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3636 7.75736L16.9494 6.34315L11.2926 12L16.9494 17.6569L18.3636 16.2426L14.121 12L18.3636 7.75736Z" fill="rgba(55,53,47, 0.45)"/>
              <path d="M11.2926 6.34315L12.7068 7.75736L8.46417 12L12.7068 16.2426L11.2926 17.6568L5.63574 12L11.2926 6.34315Z" fill="rgba(55,53,47, 0.45)"/>
          </svg>
          </div>
        </div>
        <span style={{margin: "0", fontSize: "24px"}}>Workplaces</span>
        <div className={styles.nbwplaces}>
          <Link className={styles.nbwplaces}>WorkplaceName</Link>
          <Link className={styles.nbwplaces}>WorkplaceName</Link>
        </div>
        <Link style={{color: "rgb(55,53,47)"}}><span style={{margin: "0", fontSize: "24px"}}>Calendar</span></Link>
      </nav>
      <Workplace></Workplace>
    </>
  );
}

export default App;
