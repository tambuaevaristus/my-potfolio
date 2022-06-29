import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skill from "./Skill";
import ExtraSkill from "./ExtraSkill";

export default function ExtraSkills() {
  return (
    <div className="container">
      <h1 className="text-center my-5">Extra Skills</h1>
      <div class="owl-carousel owl-theme">
        <div class="item">
        <ExtraSkill
          image="/asserts/wordpress.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <ExtraSkill
          image="/asserts/firebase.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <ExtraSkill
          image="/asserts/git.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <ExtraSkill
          image="/asserts/github.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <ExtraSkill
          image="/asserts/gitlab.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <ExtraSkill
          image="/asserts/webflow.png"
          name="Laravel"
          />
        </div>
        <div class="item">
        <ExtraSkill
          image="/asserts/bitbucket.png"
          name="Laravel"
          />
        </div>
        <div class="item">
      
        <div class="item">
        <ExtraSkill
          image="/asserts/webflow.png"
          name="Laravel"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
