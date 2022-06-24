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

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Test/>
      <Footer />
    </div>
  );
}

export default App;
