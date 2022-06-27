import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <div className="container ">
        <h1 className="text-center" >Projects</h1>
        <div className="row d-flex m-auto">
      <ProjectItem
        title="King Lion Pictures"
        description="A dynamic website built with php laravel containing an admin panel"
        link="#"
        image=""
      />

      <ProjectItem
        title="Repository Project Management System"
        description="A system built with laravel to help keep track of projjects in any institution"
        link="#"
        image=""
      />
      <ProjectItem
        title="Ewald Music Website"
        description="A dynamic website built with Reactjs"
        link="#"
        image=""
      />
      <ProjectItem
        title="Chat Application"
        description="A chat application built with java spring boot"
        link="#"
        image=""
      />
    </div>
    </div>
  );
}
