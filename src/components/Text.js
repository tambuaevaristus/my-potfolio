import React from "react";

const Test = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-4">
          <div class="position-relative d-flex h-100">
            <div
              class="position-absolute top-0 start-0 w-100 h-100 rounded-3 bg-size-cover bg-repeat-0 bg-position-center"
            //   style={{backgroundImage: url:"assets/img/testimonials/03.jpg"}}
            ><img src="assets/img/testimonials/03.jpg" alt="" /></div>
          </div>
        </div>
        <div class="col-md-8">
          <figure class="card position-relative border-0 shadow-sm py-3 p-0 p-lg-4 mt-4 mb-0 ms-xl-5">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-lg-5">
              <i class="bx bxs-quote-left"></i>
            </span>
            <blockquote class="card-body mt-2 mb-0">
              <p class="fs-lg">
                Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam
                iaculis varius mauris magna sem. Egestas sed sed suscipit dolor
                faucibus dui imperdiet at eget. Tincidunt imperdiet quis
                hendrerit aliquam feugiat neque cras sed. Dictum quam integer
                volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus
                at mauris.
              </p>
            </blockquote>
            <figcaption class="card-footer border-0 d-sm-flex pt-0 mt-n3 mt-lg-0">
              <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-4">
                <img
                  src="assets/img/avatar/05.jpg"
                  width="48"
                  class="d-md-none rounded-circle"
                  alt="Ralph Edwards"
                />
                <div class="ps-3 ps-md-0">
                  <h5 class="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                  <span class="fs-sm text-muted">Head of Marketing</span>
                </div>
              </div>
              <img
                src="assets/img/brands/02.svg"
                width="160"
                class="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                alt="Company logo"
              />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Test;
