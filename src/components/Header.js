import React from "react";
import Icon, { FontAwesome, Feather } from "react-web-vector-icons";
import { FaEtsy, FaWhatsapp, FaBars } from "react-icons/fa";
import { TbLetterT, TbLetterV, TbLetterA, TbLetterE } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-md fixed-top navbar-dark header">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <div className="d-md-none border bx-border-radius-2">
              <TbLetterE />
              <TbLetterV />
              <TbLetterA />
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            <FaBars size={30} />
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarTogglerDemo01"
          >
            <div class="d-none d-md-block border border-l">
              <Link class="navbar-brand" to="/">
                {/* <TbLetterT /> */}
                {/* <FaEtsy />  */}
                <TbLetterE />
                <TbLetterV />
                <TbLetterA />
              </Link>
            </div>

            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/education">
                  Education
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item ml-4">
                <Link
                  class="nav-link btn btn-outline-secondary text-bold"
                  to=" https://wa.me/+237676814364"
                >
                  Lets Chat <FaWhatsapp size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
