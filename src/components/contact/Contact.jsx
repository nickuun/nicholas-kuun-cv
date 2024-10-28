import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_bblbh4c",
      "template_wvbje3e",
      form.current,
      "8qZo3bn4puLSOrHAm"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Want To Talk?</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a
            href="mailto:nicholas@gmail.com"
            target="_blank"
            className="contact__option"
          >
            <article>
              <AiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>nickuun@gmail.com</h5>
            </article>
          </a>

          <a
            href="https://www.linkedin.com/in/nicholas-ku%C3%BCn-a2a1801a2/"
            target="_blank"
            className="contact__option"
          >
            <article>
              <AiOutlineLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>linkedin.com/Nicholas-Kuun</h5>
            </article>
          </a>

          <a
            href="https://wa.me/+27813814274"
            target="_blank"
            className="contact__option"
          >
            <article>
              <RiWhatsappLine className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>081-381-4274</h5>
            </article>
          </a>
        </div>

        {/* <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder={"Your Message; \nI would love to hear from you."}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
