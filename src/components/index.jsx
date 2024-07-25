import React, { useState, useEffect } from "react";
import "../js/main";
import "../css/main.css";
import { ASSETS } from "../assets/path";
import Header from "./Header";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Testing } from "./testing";
import UpdateModal from "./updateModal";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { motion } from "framer-motion";

const Index = () => {
  const [cookies, setCookies] = useState(true);
  const [transValue, setTransValue] = useState(0);
  const [show, setShow] = useState(false);
  const [animateEnd, setAnimateEnd] = useState(false);

  // let transValue = 60;

  useEffect(() => {
    const inc = setInterval(() => {
      transValue < 200 ? setTransValue(transValue + 125) : setTransValue(0);
    }, 2700);
    return () => clearInterval(inc);
  }, [transValue]);

  //header
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      // document.getElementById("header").style.fontSize = "30px";
      let element = document.getElementById("header");
      element.classList.add("fixed");
      // doc $("#header").addClass("fixed");
    } else {
      // document.getElementById("header").style.fontSize = "90px";
      // $("#header").removeClass("fixed");
      let element = document.getElementById("header");
      element.classList.remove("fixed");
    }
  }

  /// launching date
  var ending_date = new Date("02/10/2023");
  var start_date = new Date();

  var date = getDifferenceInDays(start_date, ending_date);
  // console.log("🚀 ~ file: explore.jsx:37 ~ Explore ~ date", date);
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    var date = diffInMs / (1000 * 60 * 60 * 24);
    var returningvalue =
      date > 1
        ? Math.ceil(date) + " Days" //days
        : date * 24 > 1
        ? Math.ceil(date * 24) + " Hours" //hours
        : Math.ceil(date * 60) + " Min"; //minutes
    return returningvalue;
  }
  console.log(screen.height);

  return (
    <div style={{ backgroundColor: "#271e30" }}>
      {/* <div style={{ zIndex: 999999999, opacity: 1 }}>
        <Testing />
      </div> */}
      <div className="wrapper ">
        {/* <!-- newsletter modal --> */}
        <UpdateModal />

        {/* <!-- header --> */}
        <div id="header">
          <div className="brand-box">
            <NavLink to="/" className="brand-link navbar-brand">
              <motion.img
                // initial={{ x: 750, y: 280, scale: 3, width: 90 }}
                initial={{
                  // x: "calc(100vw - 50%)"
                  x:
                    screen.width < 500
                      ? (screen.width * 35) / 100
                      : screen.width < 1000
                      ? (screen.width * 40) / 100
                      : (screen.width * 47) / 100,
                  y:
                    screen.height < 1100
                      ? (screen.height * 30) / 100
                      : (screen.height * 40) / 100,
                  scale: 2.2,
                  width: 90,
                }}
                // animate={{ x: move ? 200 : -200, y: move ? 100 : 20 }}
                animate={{ x: 0, y: 0, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 5,
                  delay: 1,
                  width: 20,
                }}
                src={ASSETS.OPEN.LOGO_SVG}
                // "./images/logo.png"
                alt=""
                className="brand-img"
              />
            </NavLink>
          </div>
          <motion.nav
            className="navbar navbar-expand-lg navbar-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 4, delay: 10 }}
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/explore" className="nav-link">
                      Explore
                    </NavLink>
                    {/* <span onClick={() => navigate("/explore")} className="nav-link">
                  Explore
                </span> */}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/experience" className="nav-link">
                      Experience
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/aboutUs" className="nav-link">
                      About US
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contactUs" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <ul
                className="coming-soon-list d-flex align-content-center flex-wrap"
                role="list"
              >
                <li className="coming-soon-item">
                  Launching in <span className="time-remain">{date}</span>
                </li>
                <li className="coming-soon-item">
                  <button
                    className="btn-update"
                    data-bs-toggle="modal"
                    data-bs-target="#newletter"
                  >
                    Get Updates
                  </button>
                </li>
              </ul>
            </div>
          </motion.nav>
        </div>

        {/* // preloader */}

        {/* <!-- aside --> */}
        <motion.aside
          id="aside"
          // animate={{ x: move ? 200 : -200, y: move ? 100 : 20 }}
          initial={{ scale: 0 }}
          // animate={{ x: move ? 200 : -200, y: move ? 100 : 20 }}
          animate={{ scale: 1 }}
          transition={{
            type: "tween",
            duration: 5,
            delay: 5,
          }}
        >
          <div className="aside-box">
            <div id="heroSliderNav">
              <div className="swiper-scrollbar swiper-scrollbar-horizontal">
                <div className="swiper-scrollbar-drag"></div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
            <div className="rotation-wrapper-outer">
              <div className="rotation-wrapper-inner">
                <ul
                  className="element-to-rotate social-list d-flex align-items-center justify-content-center"
                  role="list"
                >
                  <li className="social-item">
                    <a href="#" className="social-link">
                      Facebook
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="#" className="social-link">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* <!-- main --> */}
        <motion.main id="main">
          {/* <!-- home --> */}
          <section id="home">
            {/* <!-- Swiper --> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", duration: 4, delay: 10 }}
            >
              <Swiper
                modules={[Autoplay, Pagination, Scrollbar, Navigation]}
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                effect={"fade"}
                keyboard={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                scrollbar={
                  { el: ".swiper-scrollbar" }
                  // draggable: true,
                }
                // drag={{ el: ".swiper-scrollbar-drag" }}
                // navigation={true}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      0 +
                      (index + 1) +
                      "</span>"
                    );
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <video
                    className="hero-img"
                    autoPlay
                    muted
                    src={ASSETS.VIDEO.HOME_BACKGROUND_1}
                    // "./video/home-background-1.mp4"
                    poster={ASSETS.HOME.POSTER_01}
                    // "./images/home/poster-01.jpg"
                  ></video>
                </SwiperSlide>
                <SwiperSlide>
                  <video
                    className="hero-img"
                    autoPlay
                    muted
                    src={ASSETS.VIDEO.HOME_BACKGROUND_2}
                    // "./video/home-background-2.mp4"
                    poster={ASSETS.HOME.POSTER_03}
                    // "./images/home/poster-03.jpg"
                  ></video>
                </SwiperSlide>
                <SwiperSlide>
                  <video
                    className="hero-img"
                    autoPlay
                    muted
                    src={ASSETS.VIDEO.HOME_BACKGROUND_3}
                    // "./video/home-background-3.mp4"
                    poster={ASSETS.HOME.POSTER_02}
                    // "./images/home/poster-02.jpg"
                  ></video>
                </SwiperSlide>
              </Swiper>
            </motion.div>

            <div className="container-fluid">
              <div className="hero-content-box home-2">
                <motion.p
                  initial={{
                    x:
                      screen.width < 500
                        ? (screen.width * 39) / 100
                        : screen.width < 800
                        ? (screen.width * 49) / 100
                        : screen.width < 1000
                        ? (screen.width * 42) / 100
                        : (screen.width * 45) / 100,

                    y:
                      screen.height < 750
                        ? (screen.height * 25) / 100
                        : screen.height < 850
                        ? (screen.height * 15) / 100
                        : (screen.height * 25) / 100,
                    scale: 1.5,
                  }}
                  animate={{ x: 0, y: 0, scale: 1 }}
                  className="subtitle"
                  transition={{ type: "tween", duration: 5, delay: 2 }}
                >
                  Coming Soon
                </motion.p>
                <motion.p
                  className="desc"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "tween", duration: 4, delay: 10 }}
                >
                  Visit Mauritius® will soon provide you with a Destination
                  website which will offer you insight information to{" "}
                  <NavLink to="./explore">explore</NavLink> Mauritius with new
                  eyes. And we are working in collaboration to offer you a large
                  choice of <NavLink to="./experience">new experience</NavLink>.
                </motion.p>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "tween",
                    duration: 4,
                    delay: 6,
                  }}
                  className="title"
                >
                  Visit <br />
                  Mauritius
                </motion.p>
                <motion.a
                  to="#"
                  className="btn-more "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "tween", duration: 5, delay: 10 }}
                >
                  What can be expected
                </motion.a>
              </div>
            </div>
          </section>
        </motion.main>
      </div>
      {/* <!-- remove hide className to toggle noticebox --> */}
      {cookies && (
        <motion.div
          id="cookies-notify"
          className="show"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 4, delay: 10 }}
        >
          <div className="container">
            <div className="cookies-notify-text">
              <h1 id="cookies-notify-title">OUR USE OF COOKIES</h1>
              <p>
                We use necessary cookies to make our site work. We would also
                like to set optional analytics cookies to help us improve it. We
                won’t set optional cookies unless you enable them. Using this
                tool will set a necessary cookie on your device to remember your
                preferences. For more information about the cookies we use, see
                our Cookies page
              </p>
            </div>
            <div className="cookies-notify-buttons">
              <button
                onClick={() => setCookies(false)}
                // onClick={cookiy}
                id="cookies-notify-accept"
                className="cookies-notify-button cookies-link cookies-tabbable cookies-accept-button"
              >
                <span>I Accept Cookies</span>
              </button>
              <button
                onClick={() => setCookies(false)}
                id="cookies-notify-dismiss"
              >
                <AiOutlineClose fill="white" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
