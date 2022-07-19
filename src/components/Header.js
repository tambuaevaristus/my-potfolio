import React from "react";
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { FaEtsy, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-md fixed-top navbar-dark header">
        <div class="container">
          <a class="navbar-brand" href="/">
            <div className="d-md-none">         
              <FaEtsy />
              </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarTogglerDemo01"
          >
            <div class="d-none d-md-block">
            <a class="navbar-brand" href="/">
            
            <FaEtsy />

          </a>
            </div>
           
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/education">
                  Education
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item ml-4">
                <a class="nav-link btn btn-outline-secondary text-bold" href=" https://wa.me/+237676814364">
                  Lets Chat
                     {" "}<FaWhatsapp size={25}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
