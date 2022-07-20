import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

import { IoLocation } from "react-icons/io5"
export default function Contact() {
  // const accountSid = "AC5a5709f27c34c2617f9b826737d58aeb";
  // const authToken = "74d12260a9840008e00fa19adb1530ff";
  // const client = require("twilio")(accountSid, authToken);

  // const sendMessage = () => {

  //   client.messages
  //     .create({
  //       from: "whatsapp:+14155238886",
  //       body: "Hello there!",
  //       to: "whatsapp:+237676814364",
  //     })
  //     .then((message) => console.log(message.sid));
  // };
  return (
    <div class="container">
      {" "}
      <h1 class=" text-center my-4">Contact Me</h1>
      <div class="row">
        <div class="  justify-content-center d-flex col-md-6">
          <form
            class="text-center border border-dark border-light p-5"
            action="#!"
          >
            {/*  */}
            <p>Leave me a message on whatsapp</p>
            <input
              type="text"
              id="defaultContactFormName"
              class="form-control mb-4"
              placeholder="Name"
            />

            <input
              type="email"
              id="defaultContactFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
            />

            <div class="form-group">
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>

            <button class="btn btn-info mt-4 btn-block" type="submit">
              Send Message
            </button>
          </form>
          {/* _V9jq7GYWY63msI7woh8iByshAt8P3l-ft94EfSl */}
        </div>
        <div className="col-md-6  ">
          <div class="">
            <div className="align-content-between">
              <div class=" my-3 px-2">
                <a href="#">
                  <FaWhatsapp size={30} color="primary" />{" "}
                </a>
                : +237 676814364

              </div>
              <div class="px-2">
                <a href="https://www.facebook.com/tambua.evarisrus/">
                  <FaFacebook size={30} color="primary" />{" "}
                </a>
                Tambua Evaristus
              </div>
              <div class=" my-3 px-2">
                <a href="#">
                  <IoLocation size={30} color="primary" />{" "}
                </a>
                Molyko, Buea South West Cameroon
              </div>
              <div class=" my-3 px-2">
                <a href="#">
                  <FaPhone  size={30} color="primary" />{" "}
                </a>
                +237 676814364
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
