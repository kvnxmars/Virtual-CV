// --- App.jsx ---
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";


export default function App() {
return (
    <div className="app-container">
        <Hero />
        <About />
        <Navbar />
        
        <Projects />
        <Contact />

    </div>
   );
}