import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div class="container-fluid px-5 bg-dark mt-5 text-white">
      <footer class="py-5 container">
        <div class=" mx-auto">
            <div class="d-flex justify-content-center">
              <span class="px-2"><a href="#"><FaWhatsapp size={45} color="white"/> </a></span>
              <span class="px-2"><a href="https://www.facebook.com/tambua.evarisrus/"><FaFacebook size={45} color="white"/> </a></span>
              <span class="px-2"><a href="#"><FaInstagram size={45} color="white"/> </a></span>
              <span class="px-2"><a href="#"><FaTwitter size={45} color="white"/> </a></span>
              <span class="px-2"><a href="#"><FaLinkedin size={45} color="white"/> </a></span>
            </div>
        </div>
        <div class="d-flex justify-content-around py-4 my-4 border-top">
          <p> All rights reserved.</p>
          <p>&copy; 2022 Tambua Evaristus.</p>
         
        </div>
      </footer>
    </div>
  );
}
