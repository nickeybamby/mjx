import React from "react";
import "./contact.css";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <>
      <div id="contact"></div>
      <section className="contact">
        <h2 className="gradient__text text-2xl text-center">Contact</h2>
        <div className="contact__container">
          <div className="contact__content">
            <h3 className="subtext">Let's work together</h3>
            <p>
              Hello there... <br />
              Send us a mail in detail telling us about your project goals
              and vision so we can understand your needs and craft a tailored
              solution to bring your ideas to life.
            </p>
          </div>
          <div className="email__add">
            <Lottie></Lottie>
            <p><strong className="subtext">Mail:</strong> <span className="">info@mjxchange.com</span></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
