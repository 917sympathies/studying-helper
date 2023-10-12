import styles from "./style.module.css"
import logo from "./logo.png"
import React from 'react'
import { Link } from "react-router-dom";
import Workplace from "./Workplace";
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Workplace></Workplace>
    </>
  );
}

export default App;
