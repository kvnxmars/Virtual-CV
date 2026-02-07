// --- App.jsx ---
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
//import ThreeScene from "./components/ThreeScene";
import Education from "./components/Education";
import Experience  from "./components/Experience";
import Skills from "./components/Skills";


export default function App() {
return (
    <div className="app-container">
        <Hero />
        <About />
        <Navbar />
        
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

    </div>
   );
}