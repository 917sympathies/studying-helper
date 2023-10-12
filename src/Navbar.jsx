import styles from "./style.module.css";
import logo from "./logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showFullNavbar, setNavbar] = useState(true);
  const [workplaces, setWorkplaces] = useState([]);

  function ToggleNavbar() {
    if (showFullNavbar) {
      document.getElementById("workplace").style.marginLeft = "40px";
      setNavbar(false);
    } else {
      document.getElementById("workplace").style.marginLeft = "220px";
      setNavbar(true);
    }
  }

  function AddWorkPlace(){
    setWorkplaces((currentWorkplaces)=>{
        return [...currentWorkplaces, {id: crypto.randomUUID(), name: "Unknown"}]
    });
  }

  return showFullNavbar ? (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.navbarheader}>
        <div className={styles.nbheaderuser}>
          <img
            style={{ height: "24px", width: "24px" }}
            src={logo}
            alt="logo"
          ></img>
          <span
            style={{
              margin: "0px 12px",
              overflow: "hidden",
              flexGrow: "1",
            }}
          >
            Username
          </span>
        </div>
        <div style={{ paddingTop: "5px" }}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="rgba(55,53,47, 0.45)"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => ToggleNavbar()}
          >
            <path
              d="M18.3636 7.75736L16.9494 6.34315L11.2926 12L16.9494 17.6569L18.3636 16.2426L14.121 12L18.3636 7.75736Z"
              fill="rgba(55,53,47, 0.45)"
            />
            <path
              d="M11.2926 6.34315L12.7068 7.75736L8.46417 12L12.7068 16.2426L11.2926 17.6568L5.63574 12L11.2926 6.34315Z"
              fill="rgba(55,53,47, 0.45)"
            />
          </svg>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <svg
          id="addWorkplaceBtn"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>AddWorkPlace()}
          style={{marginRight: "6px"}}
        >
          <path
            id="Vector"
            d="M6 12H12M12 12H18M12 12V18M12 12V6"
            stroke="rgb(55,53,47)"
            strokeWidth={"2"}
          />
        </svg>
        <span style={{ margin: "0px 0px 0px 10px", fontSize: "24px" }}>
          Workplaces
        </span>
      </div>
      <div className={styles.nbwplaces}>
        {workplaces.map((workplace) => {
            return (
                <Link className={styles.nbwplaces} key={workplace.id}>{workplace.name}</Link>
            );
        })}
        {/* <Link className={styles.nbwplaces}>WorkplaceName</Link>
        <Link className={styles.nbwplaces}>WorkplaceName</Link> */}
      </div>
      <Link style={{ color: "rgb(55,53,47)" }}>
        <span style={{ margin: "0", fontSize: "24px" }}>Calendar</span>
      </Link>
    </nav>
  ) : (
    <>
      <nav className={styles.smallnavbar}>
        <svg
           width="24px"
           height="24px"
           viewBox="0 0 24 24"
           fill="rgba(55,53,47, 0.45)"
           xmlns="http://www.w3.org/2000/svg"
           onClick={() => ToggleNavbar()}
           style={{
             marginTop: "10px",
           }}
        >
          <path
            d="M5.63574 7.75737L7.04996 6.34315L12.7068 12L7.04998 17.6568L5.63577 16.2426L9.87839 12L5.63574 7.75737Z"
            fill="rgba(55,53,47, 0.45)"
          />
          <path
            d="M12.7068 6.34315L11.2926 7.75737L15.5352 12L11.2926 16.2426L12.7068 17.6568L18.3637 12L12.7068 6.34315Z"
            fill="rgba(55,53,47, 0.45)"
          />
        </svg>
      </nav>
    </>
  );
}

export default Navbar;
