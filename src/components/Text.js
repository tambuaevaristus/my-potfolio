import React from "react";

const Test = () => {
  return (
    <div className="container py-5">
      <div class="row">
        <div class="col-4">
          <div class=" d-flex h-100">
            <div
            ><img class="position-absolut top-0 start-0 w-100  rounded-3 bg-size-cover bg-repeat-0 bg-position-center" src="asserts/about.jpeg" width="100%" height="100%" alt="" /></div>
          </div>
        </div>
        <div class="col-8 ">
          <figure class="card position-relativ border-0 shadow-sm py-3 p-0 p-lg-4 mt-4 mb-0 ms-xl-5">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-lg-5">
              <i class="bx bxs-quote-left"></i>
            </span>
            <blockquote class="card-body mt-2 mb-0">
              <p class="fs-lg">
                Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam
                iaculis varius mauris magna sem. Egestas sed sed suscipit dolor
                
              </p>
            </blockquote>
            <figcaption class="card-footer border-0 d-sm-flex pt-0 mt-n3 mt-lg-0">
              <div class="d-flex align-items-center border-end-sm pe-sm-4 me-sm-4">
                {/* <img
                src="asserts/logo.png"
                width="48"
                  class="d-md-none rounded-circle"
                  alt="Tambua Evaristus"
                /> */}
                <div class="ps-3 ps-md-0">
                  <h5 class="fw-semibold lh-base mb-0">Tambua Evaristus</h5>
                  <span class="fs-sm text-muted">Software Engineer</span>
                </div>
              </div>
              <img
                src="asserts/logo.png"
                width="160"
                height="50px"
                class="d-block mt-2 ms-5 mt-sm-0 pr-sm-5 ms-sm-0"
                alt="Tambua Evaristus"
              />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Test;
