import React from "react";

export default function Footer() {
  return (
    <div class="container-fluid pt-5 bg-dark mt-5 text-white">
      <footer class="py-5 container">
        <div class="row">
          <div class="col-lg-4">
            <h5 class="text-white">Section</h5>
            <ul class="nav flex-column">
               <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Projects
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Education
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4">
            <h5 class="text-white">Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4">
            <h5 class="text-white">Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link text-muted p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 offset-1 ">
            <form>
              <h5 class="text-white">Subscribe to our newsletter</h5>
              <p></p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Tambua Evaristus. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#twitter" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#instagram" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
