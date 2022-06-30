import React from "react";

export default function Banner() {
  return (
    <div id="carouselExampleControls" class="carousel slide bg-white mt-5" data-ride="carousel">

      <div class="carousel-inner"  style={{
            borderBottomLeftRadius: "40px",
          }}>
        <div class="carousel-item active">
        <div class="d-none d-md-block">
        <img
            height="700px"
            src="/asserts/EvaBanner2.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
        </div>
        <div class="d-sm-block d-md-none">
        <img
            height="700px"
            src="/asserts/EvaBanner2-mobile.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
        </div>
         
        </div>
        <div class="carousel-item">
          <img
            height="700px"
            src="/asserts/banner1.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
        </div>

        <div class="carousel-item">
          <img
         
            height="700px"
            src="/asserts/banner5.png"
            class="d-block w-100 img-fluid h-100"
            alt="..."
          />
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
  );
}
