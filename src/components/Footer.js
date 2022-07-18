import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div class="container-fluid px-5 bg-dark mt-5 text-white">
      <footer class="py-5 container">
        <div class=" mx-auto">
            <ul class="d-flex justify-content-center">
              <li class="px-2"><a href="#"><FaWhatsapp size={45} color="white"/> </a></li>
              <li class="px-2"><a href="#"><FaFacebook size={45} color="white"/> </a></li>
              <li class="px-2"><a href="#"><FaInstagram size={45} color="white"/> </a></li>
              <li class="px-2"><a href="#"><FaTwitter size={45} color="white"/> </a></li>

            </ul>
        </div>
        <div class="d-flex justify-content-end py-4 my-4 border-top">
          <p>&copy; 2022 Tambua Evaristus. All rights reserved.</p>
         
        </div>
      </footer>
    </div>
  );
}
