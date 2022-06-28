import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skill from "./Skill";

export default function ExtraSkills() {
  return (
    <div className="container">
      <h1 className="text-center my-5">Extra Skills</h1>
      <div class="owl-carousel owl-theme">
        <div class="item">
        <Skill
          image="/asserts/wordpress.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <Skill
          image="/asserts/firebase.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <Skill
          image="/asserts/git.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <Skill
          image="/asserts/github.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <Skill
          image="/asserts/gitlab.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <Skill
          image="/asserts/webflow.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <Skill
          image="/asserts/bitbucket.png"
          name="Laravel"
          />
        </div>
        <div class="item">
      
        <div class="item">
        <Skill
          image="/asserts/webflow.png"
          name="Laravel"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
