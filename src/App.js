import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Education from "./components/Education";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Route path="projects" element={<ProjectList />} />
      </Routes>
    </div>
  );
}

export default App;
