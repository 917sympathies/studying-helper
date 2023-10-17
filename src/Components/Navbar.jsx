import styles from "../css/style.module.css"
import logo from "../logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar( {username, currentWorkspace, setCurrentWorkspace, workspaces, setWorkspaces}) {
  const [showFullNavbar, setNavbar] = useState(true);

  function ToggleNavbar() {
    const workplaceStyle = document.getElementById("workplace").style;
    if (showFullNavbar) {
      workplaceStyle.marginLeft = "40px";
      setNavbar(false);
    } else {
      workplaceStyle.marginLeft = "180px";
      setNavbar(true);
    }
  }

  function AddWorkspace() {
    setWorkspaces((currentWorkplaces) => {
      return [
        ...currentWorkplaces,
        { id: crypto.randomUUID(), name: "Untitled", todos: [] },
      ];
    });
  }

  return showFullNavbar ? (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.navbarheader}>
        <div className={styles.nbheaderuser}>
          <img
            style={{ height: "19.5px", width: "19.5px" }}
            src={logo}
            alt="logo"
          ></img>
          <div
            style={{
              margin: "0px 12px",
              overflow: "hidden",
              flexGrow: "1",
              fontSize: "14px",
            }}
          >
            {username}
          </div>
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
      <div className={styles.navbarbody}>
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
            onClick={() => AddWorkspace()}
            style={{ marginRight: "12px" }}
          >
            <path
              id="Vector"
              d="M6 12H12M12 12H18M12 12V18M12 12V6"
              stroke="rgba(25, 23, 17, 0.6)"
              strokeWidth={"2"}
            />
          </svg>
          <div style={{ margin: "0px 0px 0px 0px", fontSize: "16px" }}>
            Workspaces
          </div>
        </div>
        <div className={styles.nbwplaces}>
          {workspaces.map((workspace) => {
            return (
              <div className={styles.nbwplaces} key={workspace.id} onClick={()=> setCurrentWorkspace({id: workspace.id, name: workspace.name, todos: workspace.todos})}>
                {workspace.name}
              </div>
            );
          })}
        </div>
        <Link style={{ color: "inherit" }}>
          <div style={{ margin: "0", fontSize: "16px" }}>Calendar</div>
        </Link>
      </div>
    </nav>
  ) : (
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
      <div className={styles.smallnavbarbody}></div>
    </nav>
  );
}

export default Navbar;
