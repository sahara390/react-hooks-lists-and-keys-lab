import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";


function App() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      about: "A personal portfolio site to showcase my work.",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      id: 2,
      name: "Todo App",
      about: "A simple todo list application.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      name: "Blog Platform",
      about: "A blog platform with user authentication.",
      technologies: ["Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    <div>
      <NavBar />
      <Home name="Sahara Ahmed" city="Nairobi" />
      <About bio="Learning React step by step!" github="https://github.com/sahara" linkedin="https://linkedin.com/in/sahara" />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
