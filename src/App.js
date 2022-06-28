import React from "react";
import Header from "./components/Header";
import ProjectItem from "./components/ProjectItem";
import Album from "./screens/Album";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./screens/ContactForm";
import Test from "./components/Text";
import Banner from "./Banner";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Education from "./components/Education";
import Languages from "./components/Languages";
import ExtraSkills from "./components/ExtraSkills";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Test/>
      <ProjectList />
      <Languages />
      <ExtraSkills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
