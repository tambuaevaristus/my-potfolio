import React from "react";

export default function About() {
  return (
    <div className="container-fluid bg-white">

    <div className="container py-5 px-5 text-center">
      <div className="text-center px-md-5">
        <h1 className="text-center">About Eva</h1>
        <p className="text-center ">
          My full name is Tambua Evaristus N. But you can call me Eva, or
          anything else that feels right to you. <br/> I am a graduate from the
          faculty of Engineering and technology University of Buea. I studied
          software engineering. <br/> I currently work at Iknite space. I
          specialize in building web and mobile applications I also make things
          that make people happy.
        </p>
        <a class="btn btn-outline-primary" href="about">
          Read More
        </a>
      </div>


      <img className="img-fluid text-center" src="/asserts/Core-Values.png"/>
    </div>
    </div>
  );
}