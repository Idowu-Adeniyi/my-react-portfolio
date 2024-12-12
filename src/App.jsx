import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        {/* <Skills />
        <Education /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
