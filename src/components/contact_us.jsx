import React, { useEffect } from "react";
import "../lib/fontawesome/css/all.min.css";
import "../lib/jquery/jquery-3.5.1.min";
// import "../lib/bootstrap-5.2.0-dist/css/bootstrap.min.css";
import "../lib/jquery/jquery-3.5.1.min";
// import "../lib/bootstrap-5.2.0-dist/js/bootstrap.min";
import "../js/main";
import { ASSETS } from "../assets/path";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import UpdateModal from "./updateModal";

const contact_us = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="wrapper">
        {/* <!-- newsletter modal --> */}
        <UpdateModal />

        {/* <!-- header --> */}
        <Header />

        {/* <!-- aside --> */}
        <SocialLinks />

        {/* <!-- main --> */}
        <main id="main">
          {/* <!-- contact-us --> */}
          <section id="contact-us">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 contact-form px-5">
                  <div className="contact-form-box mx-auto">
                    <p className="form-title">Every word counts</p>
                    <p className="form-desc">
                      More about promoting culture and enjoying nature
                    </p>
                    <form
                      action="#"
                      className="d-flex flex-column contact-form-inner-box"
                    >
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        className="input-field"
                        placeholder="Email Address"
                      />
                      <input
                        type="tel"
                        className="input-field"
                        placeholder="Phone (+00) 123 456789"
                      />
                      <fieldset>
                        <legend>Personalia:</legend>
                        <textarea></textarea>
                      </fieldset>
                    </form>
                    <button className="btn-submit" type="submit">
                      Send
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 contact-into-box">
                  <div className="follow-us mx-auto">
                    <div className="contact-info-box">
                      <p className="contact-info-title">Opening Hours</p>
                      <p className="contact-info-desc">
                        Monday - Friday: 09:00 - 18:00
                      </p>
                      <p className="contact-info-desc">
                        Monday - Saturday: Closed
                      </p>
                    </div>
                    <div className="contact-info-box">
                      <p className="contact-info-title">Email</p>
                      <p className="contact-info-desc">
                        info@visitmauritius.com
                      </p>
                    </div>
                    <div className="contact-info-box">
                      <p className="contact-info-title">Visit Us at</p>
                      <p className="contact-info-desc">
                        An Office Appartment <br /> Street address <br /> Postal
                        code City, country.
                      </p>
                    </div>
                  </div>
                  <div className="social-info">
                    <p className="form-title text-center">Follow Us</p>
                    <p className="form-desc text-center">
                      Connecting you with enthusiats
                    </p>
                    <ul
                      className="social-list d-flex align-items-center justify-content-center flex-wrap"
                      role="list"
                    >
                      <li className="social-item">
                        <a
                          href="#"
                          className="social-link d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li className="social-item">
                        <a
                          href="#"
                          className="social-link d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li className="social-item">
                        <a
                          href="#"
                          className="social-link d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="social-item">
                        <a
                          href="#"
                          className="social-link d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="social-item">
                        <a
                          href="#"
                          className="social-link d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-snapchat-ghost"></i>
                        </a>
                      </li>
                      <li className="social-item">
                        <a
                          href="#"
                          className="social-link d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default contact_us;
