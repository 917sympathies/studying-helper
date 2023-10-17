import React, { useState } from "react";

function Authorization({setUsername, setIsLogged, isLogged}){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("")

    function validLogin(){
        const login = document.getElementsByClassName("loginInput");
        return login[0].value !== "" ? true : false;
    }

    function validPassword(){
        const password = document.getElementsByClassName("passwordInput");
        return password[0].value !== "" ? true : false;
    }

    function getLogin(){
        const login = document.getElementsByClassName("loginInput");
        return login[0].value;
    }

    function handleAuthorization(){
        
        if(validLogin() && validPassword()){
            setUsername(getLogin());
            setLogin("");
            setPassword("");
            setIsLogged(true);
        }
        else alert("Введите данные!");
    }

    return(
        <div className="authorization" style={ isLogged? {visibility: "hidden"} : {display: "flex", alignItems: "center", height: "100%", justifyContent: "center", verticalAlign: "middle"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1>Authorization</h1>
                <input className="loginInput" type="text" placeholder="Username" value={login} onChange={ e => setLogin(e.target.value)}></input>
                <input className="passwordInput" type="password" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value)}></input>
                <input type="button" value="Log In" onClick={()=> handleAuthorization()}></input>
            </div>
        </div>
    );
}

export default Authorization;