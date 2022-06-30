import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skill from "./Skill";

export default function Languages() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Programing Languages</h1>
      <p className="text-center ">
         Within the course of my journey i have learned how to work with a number of programing  languages and  technologies. <br/>Below are a list of programing languages i can confidently work with. 
      </p>

      <hr/>
      <div class="row">
        <Skill image="/asserts/laravel.png" name="Laravel" />
        <Skill image="/asserts/php.png" name="PHP" />{" "}
        <Skill image="/asserts/java.png" name="JAVA" />
        <Skill image="/asserts/springboot.png" name="Spring Boot" />
        <Skill image="/asserts/javascript.png" name="JavaScript" />
        <Skill image="/asserts/reactjs.png" name="React JS" />
        <Skill image="/asserts/reactnative.png" name="React Native" />
        <Skill image="/asserts/nextjs.png" name="Next JS" />
        <Skill image="/asserts/html5.png" name="HTML 5" />
        <Skill image="/asserts/css3.png" name="CSS 3" />
        <Skill image="/asserts/bootstrap.svg" name="Bootstrap 5" />
        <Skill image="/asserts/firebase.png" name="Firebase" />

      </div>
    </div>
  );
}
