import React, { useState } from "react";
import styles from "../css/style.module.css";
import { signInUrl, signUpUrl } from "../urls.js";

function Authorization({ setUser, setIsLogged, isLogged }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function validLogin() {
    const loginInput = document.getElementsByClassName("loginInput");
    return loginInput[0].value !== "" ? true : false;
  }

  function validPassword() {
    const passwordInput = document.getElementsByClassName("passwordInput");
    return passwordInput[0].value !== "" ? true : false;
  }

  function getLogin() {
    const loginInput = document.getElementsByClassName("loginInput");
    return loginInput[0].value;
  }

  function getPassword() {
    const passwordInput = document.getElementsByClassName("passwordInput");
    return passwordInput[0].value;
  }

  async function handleSignIn() {
    if (validLogin() && validPassword()) {
      const body = {
        username: getLogin(),
        password: getPassword(),
        workspaces: [],
      };
      const response = await fetch(signInUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            setUser(data);
            setLogin("");
            setPassword("");
            setIsLogged(true);
          } else {
            console.log(
              "Такого пользователя нет! Введите верные данные или зарегистрируйтесь!"
            );
          }
        })
        .catch(console.error);
    } else alert("Введите данные!");
  }

  async function handleSignUp() {
    if (validLogin() && validPassword()) {
      const body = {
        username: getLogin(),
        password: getPassword(),
        workspaces: [],
      };
      const response = await fetch(signUpUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setLogin("");
          setPassword("");
          setIsLogged(true);
        });
    }
  }

  return (
    <div
      style={
        isLogged
          ? { visibility: "hidden" }
          : {
              display: "flex",
              height: "100%",
              justifyContent: "center",
              verticalAlign: "middle",
            }
      }
    >
      <div className={styles.authorization}>
        <h1>Authorization</h1>
        <input
          className="loginInput"
          type="text"
          placeholder="Username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="button"
          value="Log In"
          onClick={() => handleSignIn()}
        ></input>
        <input
          type="button"
          value="Registration"
          onClick={() => handleSignUp()}
        ></input>
      </div>
    </div>
  );
}

export default Authorization;
