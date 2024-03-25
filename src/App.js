import React, { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";

function App() {
  let [mode, setMode] = useState("light");
  let [aboutName, setAboutName] = useState("");
  let [previousName, setPreviousName] = useState("");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const navigate = useNavigate();
  const handleAboutClick = (name) => {
    setAboutName(name);
    navigate("/about");
  };
  const handleGoBackClick = (updatename, prevName) => {
    console.log(updatename, prevName);
    setAboutName(updatename);
    setPreviousName(prevName)
    navigate("/");
  };
  return (
    <>
      <Navbar title="MyTextApp" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/about"
            element={
              <About onGoBackClick={handleGoBackClick} aboutName={aboutName} />
            }
          />
          <Route
            path="/"
            element={
              <Textform
                mode={mode}
                onAboutClick={handleAboutClick}
                aboutName={aboutName}
                prevName={previousName}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
