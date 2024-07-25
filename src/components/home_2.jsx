import React from "react";
import "../js/main";
import "../css/main.css";
import { ASSETS } from "../assets/path";
import Header from "./Header";
import SocialLinks from "./SocialLinks";

const Home_2 = () => {
  // <!-- Initialize Swiper -->
  var swiper = new Swiper(".heroSlider", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      // draggable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span className="' + className + '">' + 0 + (index + 1) + "</span>"
        );
      },
    },
  });

  return (
    <div className="wrapper">
      {/* <!-- newsletter modal --> */}
      <div
        className="modal fade"
        id="newletter"
        tabIndex="-1"
        aria-labelledby="newletterLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content mx-3">
            <div className="modal-body d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="btn-modal-close p-0 m-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.7336 5.26636C23.7103 -1.75545 12.2885 -1.75545 5.2652 5.26636C-1.75507 12.2882 -1.75507 23.713 5.2652 30.7348C8.77685 34.245 13.3885 35.9992 18.0002 35.9992C22.6119 35.9992 27.222 34.2449 30.7336 30.7348C37.7555 23.7131 37.7555 12.2882 30.7336 5.26636ZM25.4271 23.3063C26.0139 23.8931 26.0139 24.8415 25.4271 25.4283C25.1345 25.7209 24.7503 25.868 24.3661 25.868C23.982 25.868 23.5977 25.7209 23.3051 25.4283L18.0001 20.1218L12.6966 25.4267C12.4025 25.7194 12.0183 25.8665 11.6356 25.8665C11.2515 25.8665 10.8672 25.7194 10.5746 25.4267C9.98785 24.84 9.98785 23.89 10.5746 23.3048L15.8781 17.9998L10.5731 12.6948C9.98637 12.1081 9.98637 11.1581 10.5731 10.5729C11.1584 9.98612 12.1083 9.98612 12.6951 10.5729L18.0001 15.8778L23.305 10.5729C23.8918 9.98612 24.8402 9.98612 25.427 10.5729C26.0137 11.1581 26.0137 12.1081 25.427 12.6948L20.122 17.9998L25.4271 23.3063Z"
                    fill="#F2F1F1"
                  />
                </svg>
              </button>
              <img
                src={ASSETS.OPEN.NEWSLETTER_BANNER}
                // "./images/newsletter-banner.png"
                className="bg-banner-img"
                alt=""
              />
              <div className="newsletterbox mx-auto">
                <p className="heading">Say hello to us</p>
                <p className="desc">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
                <div className="field-box d-flex align-items-end">
                  <input
                    type="email"
                    className="input-field"
                    placeholder="youremail@email.com"
                  />
                  <button className="btn-subscribe">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- header --> */}
      <Header />

      {/* <!-- aside --> */}
      <SocialLinks />

      {/* <!-- main --> */}
      <main id="main">
        {/* <!-- home --> */}
        <section id="home">
          {/* <!-- Swiper --> */}
          <div className="swiper heroSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_01}
                  // "./images/banner-01.png"
                  className="hero-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_02}
                  // "./images/banner-02.png"
                  className="hero-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_03}
                  // "./images/banner-03.png"
                  className="hero-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_04}
                  // "./images/banner-04.png"
                  className="hero-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_05}
                  // "./images/banner-05.png"
                  className="hero-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_06}
                  // "./images/banner-06.png"
                  className="hero-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={ASSETS.OPEN.BANNER_07}
                  // "./images/banner-07.png"
                  className="hero-img"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="hero-content-box">
              <p className="subtitle">Coming Soon</p>
              <p className="title">
                Visit <br />
                Mauritius
              </p>
              <a href="#" className="btn-more ">
                What can be expected
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home_2;
