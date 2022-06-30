import React from "react";
import Test from "./components/Text";
import Banner from "./Banner";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Education from "./components/Education";
import Languages from "./components/Languages";
import ExtraSkills from "./components/ExtraSkills";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import About from "./components/About";

export default function Home () {
  return (
    <div>
      <Header />
      <Banner />
      {/* <Test /> */}
      <About />
      <ProjectList />
      <Languages />
      <ExtraSkills />
      <Experiences/>
      <Footer />
    </div>
  );
}
