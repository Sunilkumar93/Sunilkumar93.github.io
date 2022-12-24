import React from "react";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Git from "./Components/Git/Git";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Git />
      <Contact />
    </div>
  );
}

export default App;
