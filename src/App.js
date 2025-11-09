// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"; // keep your Contact component previously created
import "./index.css";

export default function App() {
  return (
    <div className="font-poppins">
      <Sidebar />
      <main className="ml-64"> {/* leave space for sidebar on md+ screens */}
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
