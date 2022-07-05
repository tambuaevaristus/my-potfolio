import React from "react";

export default function Contact() {
  return (
    <div class="container">
      {" "}
      <h1 class=" text-center my-4">Contact Me</h1>
      <div class="col-md-7 col-lg-6  justify-content-center d-flex">
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
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>

          <button class="btn btn-info mt-4 btn-block" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
