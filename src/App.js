import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Education from "./components/Education";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="education"
          element={
            <>
              <Header />
              <Education />
              <Footer />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />

<Route
          path="about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        
        <Route
          path="projects"
          element={
            <>
              <Header />
              <ProjectList />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
