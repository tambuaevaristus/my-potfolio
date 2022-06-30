import React from "react";

export default function Banner() {
  return (
    <div id="carouselExampleControls" class="carousel slide bg-white mt-5" data-bs-ride="carousel">
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
        <div class="carousel-item active">
          <div class="d-none d-md-block">
            <img
              height="700px"
              src="/asserts/EvaBanner3.png"
              class="d-block w-100 img-fluid h-100"
              alt="..."
            />
          </div>
          <div class="d-sm-block d-md-none">
            <img
              height="700px"
              src="/asserts/EvaBanner3-mobile.png"
              class="d-block w-100 img-fluid h-100"
              alt="..."
            />
          </div>
        </div>
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
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
}
