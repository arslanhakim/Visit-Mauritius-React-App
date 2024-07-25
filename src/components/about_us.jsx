import React, { useEffect } from "react";
import "../css/main.css";
import "../js/main";
import { ASSETS } from "../assets/path";
import { FaCross } from "react-icons/fa";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import BackToTop from "./BackToTop";
import UpdateModal from "./updateModal";

const About_us = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="wrapper">
      {/* <!-- newsletter modal --> */}
      <UpdateModal />

      {/* <!-- header --> */}
      <Header />

      {/* <!-- aside --> */}
      <SocialLinks />

      {/* <!-- main --> */}
      <main id="main">
        {/* <!-- about-us --> */}
        <section id="about-us">
          <div
            className="about-hero d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(${ASSETS.OPEN.ABOUT_BANNER})`,
              //  url(./images/about-banner.png)
            }}
          >
            <div className="container-fluid">
              <div className="hero-container mx-auto">
                <p className="hero-subtitle">its all about</p>
                <p className="hero-title">Mauritius</p>
                <p className="hero-desc">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row about-content-box">
              <div className="col-lg-6">
                <div className="content-box">
                  <div className="title-box mx-auto">
                    <p className="title">About Us</p>
                    <p className="subtitle">
                      More about promoting culture and enjoying nature
                    </p>
                  </div>
                  <div className="desc-box">
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                  </div>
                  <div className="brand-info-box">
                    <img
                      src={ASSETS.OPEN.LOGO_02}
                      // "./images/logo-02.png"
                      alt=""
                      className="brand-logo"
                    />
                    <p className="info">August 16, 2022</p>
                    <p className="info">visit@mauritius.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-box mx-xl-auto">
                  <div className="title-box mx-auto">
                    <p className="title">Our Vision</p>
                    <p className="subtitle">Making expereinces memorable</p>
                  </div>
                  <div className="desc-box">
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </div>
                </div>
                <div className="content-box mx-xl-auto mb-0">
                  <div className="title-box mx-auto">
                    <p className="title">Our Value</p>
                    <p className="subtitle">Making expereinces memorable</p>
                  </div>
                  <div className="desc-box">
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-partner about-content-box">
              <p className="title text-center">About Partners</p>
              <p className="subtitle text-center">
                More about promoting and helping businessess
              </p>
              <ul
                className="partner-list d-flex align-items-center justify-content-center"
                role="list"
              >
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_01}
                    // "./images/partner/partner-01.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_02}
                    // "./images/partner/partner-02.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_03}
                    // "./images/partner/partner-03.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_04}
                    // "./images/partner/partner-04.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_05}
                    // "./images/partner/partner-05.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_06}
                    // "./images/partner/partner-06.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_07}
                    // "./images/partner/partner-07.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
                <li className="partner-item">
                  <img
                    src={ASSETS.PARTNER.PARTNER_08}
                    // "./images/partner/partner-08.png"
                    alt=""
                    className="partner-img"
                  />
                </li>
              </ul>
            </div>

            <div className="social-info">
              <p className="title text-center">Follow Us</p>
              <p className="subtitle text-center">
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
        </section>
      </main>

      {/* <!-- back-to-top --> */}
      <BackToTop />
    </div>
  );
};

export default About_us;
