import React, { useState } from "react";
import Workplace from "./Components/Workspace";
import Navbar from "./Components/Navbar";
import Authorization from "./Components/Authorization";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [nameModal, setNameModal] = useState(true);
  const [username, setUsername] = useState("");
  const [workspaces, setWorkspaces] = useState([]);
  const [currentWorkspace, setCurrentWorkspace] = useState({id: "", name: "", todos:[] });

  function handleModal(event) {
    let target = event.target.id;
    if (target !== "wpnbinfomodal1") {
      if (target !== "wpnbinfomodal2") setNameModal(true);
      else setNameModal(false);
    } else setNameModal(nameModal ^ 1);
  }

  return (
    <div className="app" onClick={(event) => handleModal(event)}>
      <div
        style={isLogged ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <Navbar 
        username={username} 
        currentWorkspace= {currentWorkspace} 
        setCurrentWorkspace = {setCurrentWorkspace}
        workspaces={workspaces}
        setWorkspaces={setWorkspaces}
        ></Navbar>
        <Workplace
          currentWorkspace = {currentWorkspace}
          nameModal={nameModal}
          setNameModal={setNameModal}
          setIsLogged={setIsLogged}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
        ></Workplace>
      </div>
      <Authorization style={isLogged ? {visibility:"hidden"} : {visibility: "visible"}}
        setUsername = {setUsername}
        setIsLogged = {setIsLogged}
        isLogged = {isLogged}
      ></Authorization>
    </div>
  );
}

export default App;
