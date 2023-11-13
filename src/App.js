import React, { useState, useEffect } from "react";
import Workspace from "./Components/Workspace";
import Navbar from "./Components/Navbar";
import Authorization from "./Components/Authorization";
import { changeNameWorkspaceUrl, getUserWorkspacesUrl } from "./urls";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [nameModal, setNameModal] = useState(true);
  const [user, setUser] = useState({
    id: 0,
    username: "",
    password: "",
    workspaces: [],
  });
  const [workspaces, setWorkspaces] = useState([]);
  const [currentWorkspace, setCurrentWorkspace] = useState({
    id: "",
    name: "",
    tasks: [],
  });

  const [isCalendarOpened, setIsCalendarOpened] = useState(false);

  useEffect(() => {
    setWorkspaces(user.workspaces);
  }, [user]);

  useEffect(() => {
    if(currentWorkspace.name !== '')
    fetch(getUserWorkspacesUrl(user.id), {
      method: "GET",
      headers: {"Content-Type":"application/json"},
    })
    .then(response => response.json())
    .then(data => {
      setWorkspaces(data);
    })
  }, [currentWorkspace])

  useEffect(() => {
    if (nameModal && isLogged)
      fetch(changeNameWorkspaceUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentWorkspace),
      });
  }, [nameModal]);

  function handleModal(event) {
    let target = event.target.id;
    if (target !== "wpnbinfomodal1")
      target !== "wpnbinfomodal2" ? setNameModal(true) : setNameModal(false);
    else
      if(isCalendarOpened === false) 
        setNameModal(nameModal ^ 1);
  }

  return (
    <div
      className="app"
      onClick={(event) => handleModal(event)}
      style={{ height: "100%" }}
    >
      {isLogged ? (
        <div>
          <Navbar
            user={user}
            currentWorkspace={currentWorkspace}
            setCurrentWorkspace={setCurrentWorkspace}
            workspaces={workspaces}
            setWorkspaces={setWorkspaces}
            setIsCalendarOpened={setIsCalendarOpened}
          ></Navbar>
          <Workspace
            currentWorkspace={currentWorkspace}
            setCurrentWorkspace={setCurrentWorkspace}
            nameModal={nameModal}
            setNameModal={setNameModal}
            setIsLogged={setIsLogged}
            workspaces={workspaces}
            setWorkspaces={setWorkspaces}
            isCalendarOpened={isCalendarOpened}
            userId={user.id}
          ></Workspace>
        </div>
      ) : (
        <Authorization
          setUser={setUser}
          setIsLogged={setIsLogged}
          isLogged={isLogged}
        ></Authorization>
      )}
    </div>
  );
}

export default App;
