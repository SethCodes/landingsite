import React from "react";
import "bootswatch/dist/slate/bootstrap.min.css";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";



function App() {
  return (
    <div>
    <NavBar />
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// design app in app.jsx first
// load projects in map()
//contact form
//animations
//fix menu
//add sections to each section with ids
