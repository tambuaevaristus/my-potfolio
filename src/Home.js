import React from "react";
import Test from "./components/Text";
import Banner from "./Banner";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Education from "./components/Education";
import Languages from "./components/Languages";
import ExtraSkills from "./components/ExtraSkills";
import Header from "./components/Header";

export default function Home () {
  return (
    <div>
      <Header />
      <Banner />
      <Test />
      <ProjectList />
      <Languages />
      <ExtraSkills />
      <Footer />
    </div>
  );
}
