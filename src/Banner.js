import React from "react";

export default function Banner() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      {/* <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      <div class="carousel-inner bg-secondary bg-gradient">
        <div class="carousel-item active">
          <img
            height="700px"
            src="/asserts/banner4.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
          <div class="carousel-caption pt-4 row d-flex">
            <div class="col-md ">
              <h1>Creacting A Pefect Place For Studies</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            height="700px"
            src="/asserts/banner1.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
          <div class="carousel-caption d-block">
            <h2>All Courses Are Free</h2>
          </div>
        </div>
        <div class="carousel-item">
        <img
            height="700px"
            src="/asserts/banner5.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
          <div class="carousel-caption d-block">
            <h2>All Courses Are Free</h2>
          </div>
          {/* <video width="100%" height="700px" autoPlay>
            <source
              src="/asserts/vid.mp4"
              type="video/mp4"
            />
             <source
              src="/asserts/vid.mp4"
              // type="video/ogg"
            />

          </video> */}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>











      
    </div>
  );
}
