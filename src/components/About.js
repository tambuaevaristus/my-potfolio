import React from "react";
import { Link } from "react-router-dom";

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
        <Link class="btn btn-outline-primary" href="about">
          Read More
        </Link>
      </div>

      <div class="bg-light py-5 service-11">
    <div class="container">
        <div class="row">
            <div class="col-md-4 wrap-service11-box">
                <div class="card card-shadow border-0 mb-4">
                    <div class="p-4">
                        <div class="icon-space">
                            <div class="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">WD</div>
                        </div>
                        <h6 class="font-weight-medium">Web Development</h6>
                        <p class="mt-3">I design, build and maintain website sites, blogs and any web application  </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wrap-service11-box">
                <div class="card card-shadow border-0 mb-4">
                    <div class="p-4">
                        <div class="icon-space">
                            <div class="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">MD</div>
                        </div>
                        <h6 class="font-weight-medium">Mobile App Development</h6>
                        <p class="mt-3">I design, build and mantain  Android  applications from scratch to solve </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wrap-service11-box">
                <div class="card card-shadow border-0 mb-4">
                    <div class="p-4">
                        <div class="icon-space">
                            <div class="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">CM</div>
                        </div>
                        <h6 class="font-weight-medium">Computer Maintainance</h6>
                        <p class="mt-3">I also debug and solve any computer related problems hardware or software</p>
                    </div>
                </div>
            </div>
						<div class="col-md-12 mt-3 text-center">
                {/* <a class="btn btn-success-gradiant text-white border-0 btn-md" href=""><span>View Details</span></a> */}
            </div>
        </div>
    </div>
</div>


      <img className="img-fluid text-center" src="/asserts/Core-Values.png"/>
    </div>
    </div>
  );
}
