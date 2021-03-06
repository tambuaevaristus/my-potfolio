import React from "react";
import ExperienceItem from "./ExperienceItem";

export default function Experiences() {
  return (
    <div className="container my-5">

    <div class="text-center my-5">
        <h1>Work Experience</h1>
        <p className="text-center ">
        Here are is a list of some of the startups i have worked with 
      </p>
    </div>

      <div className="row">
        <ExperienceItem
          title="Afro Vision Group"
          description="Six months intensive PHP/Laravel training"
          duration="2020-2021"
          image="/asserts/afrovision.jpeg"
        />
        <ExperienceItem
          title="Zepstra Company ltd"
          description="Two months front end development training"
          duration="2019"
          image="/asserts/z.png"
        />
        <ExperienceItem
          title="Bohikor Saas"
          description="Six months back end development with Java Spring Boot"
          duration="2021-2022"
          image="/asserts/bohikor.jpeg"
        />
        <ExperienceItem
          title="Iknite Space"
          description="Two months front end development training"
          duration="2022-present"
          image="/asserts/iknite.jpg"
        />
      </div>
    </div>
  );
}
