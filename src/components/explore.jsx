import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../js/main";
import { ASSETS } from "../assets/path";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import $ from "jquery";
import BackToTop from "./BackToTop";
import "../css/main.css";
import UpdateModal from "./updateModal";
import { motion } from "framer-motion";

const Explore = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  $("html").mousemove(function (e) {
    var wx = $(window).width();
    var wy = $(window).height();

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    var newx = x - wx / 2;
    var newy = y - wy / 2;

    // $('span').text(newx + ", " + newy);

    $("#wrapper div").each(function () {
      var speed = $(this).attr("data-speed");
      if ($(this).attr("data-revert")) speed *= -1;
      TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
    });
  });

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
        <section id="explore">
          <div id="hero-section" className="section custom-full1">
            <div id="contaianer">
              <div id="wrapper">
                <div className="p4" data-revert="true" data-speed="0.01"></div>
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "tween",
                    duration: 1,
                    delay: 1,
                  }}
                  className="p1"
                  data-revert="true"
                  data-speed="0.01"
                ></motion.div> */}
                {/* //clouds  */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "tween",
                    duration: 4,
                    delay: 6,
                  }}
                  className="p2"
                  data-speed="0.02"
                ></motion.div>
                {/* mountains  */}
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 3,
                    delay: 2,
                  }}
                  className="p3"
                  data-speed="0.01"
                ></motion.div>
                <div className="word word1" data-speed="0">
                  <motion.img
                    src={ASSETS.OPEN.EXPLORE_03}
                    // "./images/explore-03.png"
                    className="subtitle-img"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "tween",
                      duration: 4,
                      delay: 8,
                    }}
                  />
                  <motion.h1
                    className="hero-title"
                    initial={{ x: 0, y: 350, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                      type: "tween",
                      duration: 5,
                      delay: 1,
                    }}
                  >
                    <span className="text1">MOUNT-</span>
                    <br />
                  </motion.h1>
                </div>
                <div className="word word2" data-speed="0">
                  <motion.h1
                    className="hero-title"
                    initial={{ x: 0, y: 350, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                      type: "tween",
                      duration: 5,
                      delay: 1,
                    }}
                  >
                    <span className="text2">AINS</span>
                  </motion.h1>
                  {/* <img src={ASSETS.OPEN.EXPLORE_SM} alt="" /> */}
                </div>
                <div className="p5">
                  <img src={ASSETS.OPEN.EXPLORE_SM_LEFT} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-list-box first-video-section section">
            <ul className="content-list" role="list">
              <li className="content-item">
                <p className="content-counter">01</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">02</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">03</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="video-content-item">
                <video
                  src="#"
                  poster={ASSETS.EXPLORE_VIDEOS.EXPLORE_VIDEO_01}
                  //   "./images/explore-video/explore-video-01.png"
                  className="content-video"
                ></video>
              </li>
            </ul>
          </div>

          <div
            className="landmark-section explore-section section custom-full1"
            style={{
              backgroundImage: `url(${ASSETS.EXPLORE_SECTION.EXPLORE_SECTION_01})`,
              // url(./images/explore-section/explore-section-01.png)
            }}
          >
            <div className="container-fluid">
              <h3 className="section-title">
                Land-
                <br />
                -Mark
              </h3>
            </div>
          </div>
          <div className="content-list-box second-video-section section">
            <ul className="content-list" role="list">
              <li className="content-item">
                <p className="content-counter">01</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">02</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">03</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="video-content-item">
                <video
                  src="#"
                  poster={ASSETS.EXPLORE_VIDEOS.EXPLORE_VIDEO_02}
                  //   "./images/explore-video/explore-video-02.png"
                  className="content-video"
                ></video>
              </li>
            </ul>
          </div>

          <div
            className="culture-section explore-section section custom-full1"
            style={{
              backgroundImage: `url(${ASSETS.EXPLORE_SECTION.EXPLORE_SECTION_02})`,
            }}
            //   "background-image: url(./images/explore-section/explore-section-02.png);"
          >
            <div className="container-fluid">
              <h3 className="section-title">
                Cultural
                <br />
                -Taste
              </h3>
            </div>
          </div>
          <div className="content-list-box second-video-section section">
            <ul className="content-list" role="list">
              <li className="content-item">
                <p className="content-counter">01</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">02</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">03</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="video-content-item">
                <video
                  src="#"
                  poster={ASSETS.EXPLORE_VIDEOS.EXPLORE_VIDEO_03} //   "./images/explore-video/explore-video-03.png"
                  className="content-video"
                ></video>
              </li>
            </ul>
          </div>

          <div
            className="culture-section explore-section section custom-full1"
            style={{
              backgroundImage: `url(${ASSETS.EXPLORE_SECTION.EXPLORE_SECTION_03})`,
            }}
            //   "background-image: url(./images/explore-section/explore-section-03.png);"
          >
            <div className="container-fluid">
              <h3 className="section-title">
                Site-
                <br />
                -Seeing
              </h3>
            </div>
          </div>
          <div className="content-list-box third-video-section section">
            <ul className="content-list" role="list">
              <li className="content-item">
                <p className="content-counter">01</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">02</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">03</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="video-content-item">
                <video
                  src="#"
                  poster={ASSETS.EXPLORE_VIDEOS.EXPLORE_VIDEO_04}
                  //   "./images/explore-video/explore-video-04.png"
                  className="content-video"
                ></video>
              </li>
            </ul>
          </div>

          <div
            className="culture-section explore-section section custom-full1"
            style={{
              backgroundImage: `url(${ASSETS.EXPLORE_SECTION.EXPLORE_SECTION_04})`,
            }}
            //   "background-image: url(./images/explore-section/explore-section-04.png);"
          >
            <div className="container-fluid">
              <h3 className="section-title">
                Under-
                <br />
                -Water
              </h3>
            </div>
          </div>
          <div className="content-list-box third-video-section section">
            <ul className="content-list" role="list">
              <li className="content-item">
                <p className="content-counter">01</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">02</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="content-item">
                <p className="content-counter">03</p>
                <p className="content-title">Title Here</p>
                <p className="content-desc">
                  Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar
                  sitLorem Ipsum dollar sitLorem Ipsum dollar sit
                </p>
              </li>
              <li className="video-content-item">
                <video
                  src="#"
                  poster={ASSETS.EXPLORE_VIDEOS.EXPLORE_VIDEO_05}
                  //   "./images/explore-video/explore-video-05.png"
                  className="content-video"
                ></video>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* <!-- back-to-top --> */}
      <BackToTop />
    </div>
  );
};

export default Explore;
