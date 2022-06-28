import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skill from "./Skill";

export default function Languages() {
  return (
    <div className="container">
      <h1 className="text-center my-5">Programing Languages</h1>
      <div class="row">
        <div class="col-md-4 col-lg-3 my-2 pt-5">
          <Skill image="/asserts/laravel.png" name="Laravel" />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
          <Skill image="/asserts/php.jpeg" name="Laravel" />{" "}
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/java.jpeg"
          name="Laravel"
          />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/springboot.png"
          name="Laravel"
          />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/javascript.png"
          name="Laravel"
          />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/reactjs.png"
          name="Laravel"
          />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/reactnative.png"
          name="Laravel"
          />
        </div>
       
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/nextjs.png"
          name="Laravel"
          />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/html.png"
          name="Laravel"
          />
        </div>
        <div class="col-md-4 col-lg-3 my-2 pt-5">
        <Skill
          image="/asserts/css.png"
          name="Laravel"
          />
        </div>
      </div>
    </div>
  );
}
