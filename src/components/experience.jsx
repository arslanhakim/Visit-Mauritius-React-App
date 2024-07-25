import React, { useState, useEffect } from "react";
import "../css/main.css";

import "../js/main";
import { ASSETS } from "../assets/path";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import BackToTop from "./BackToTop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import UpdateModal from "./updateModal";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Experience = () => {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const pause = () => {
    setPaused(true);
  };
  const play = () => {
    setPaused(false);
  };
  var vid = document.getElementById("myVideo");

  function playVid() {
    vid.play();
  }
  // let swiperNode = document.getElementById("swiperNod").hasChildNodes();
  // console.log(swiperNode.length);

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
        <section id="experience">
          <div className="container-fluid">
            <div className="experience-culture">
              <div className="sub-container">
                <h3 className="section-title">Experience the Culture</h3>
                <div className="video-player-box">
                  <video
                    onPause={() => pause()}
                    onPlay={() => play()}
                    className="player"
                    id="myVideo"
                    muted
                    paus
                    autoPlay
                    controls="controls"
                    // controlsList="nofullscreen nodownload "
                    // noremoteplayback={true}
                    loop
                    src={ASSETS.VIDEO.EXPERIENCE_TEST_VIDEO}
                    // "./video/Experience-Test-Video.mp4"
                    poster={ASSETS.OPEN.EXPERIENCE_BANNER}
                    // "./images/experience-banner.png"
                  ></video>
                  {paused && (
                    <img
                      onClick={() => playVid()}
                      src={ASSETS.OPEN.PUASE_VIDEO}
                      alt=""
                      className="pause-video"
                    />
                  )}
                </div>
                <div className="video-content-box d-flex align-items-center">
                  <div className="title-box">
                    <h3 className="place-title">Visit Mauritius</h3>
                  </div>
                  <div className="content-box">
                    <p className="title location">
                      Located at address lorem imspum, region, County
                    </p>
                    <p className="title">Description</p>
                    <p className="desc">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry'sis simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-activities">
              <div className="sub-container">
                <h3 className="section-title">Experience Activities</h3>
                <div className="slider-box">
                  {/* <!-- Swiper --> */}
                  <Swiper
                    // effect={"coverflow"}
                    id="swiperNod"
                    modules={[
                      Scrollbar,
                      Navigation,
                      Autoplay,
                      Mousewheel,
                      Keyboard,
                    ]}
                    slidesPerView={3}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    //  slidesPerView= {"auto"}
                    mousewheel={true}
                    keyboard={true}
                    freeMode={true}
                    grabCursor={true}
                    autoPlay={{ delay: 5000 }}
                    breakpoints={{
                      "@320": {
                        slidesPerView: 1,
                        spaceBetween: 1,
                      },
                      "@480": {
                        slidesPerView: 2,
                        spaceBetween: 2,
                      },
                    }}
                    scrollbar={{ el: ".experience_activities_scrollbar" }}
                    navigation={{
                      nextEl: ".experience_activities_next",
                      prevEl: ".experience_activities_prev",
                    }}
                  >
                    <SwiperSlide>
                      <img
                        className="experience-slider-img"
                        src={
                          ASSETS.EXPERIENCE_ACTIVITIES
                            .EXPERIENCE_ACTIVITIES_01_JPG
                        }
                        //   "./images/experience-activities/experience-activities-01.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="experience-slider-img"
                        src={
                          ASSETS.EXPERIENCE_ACTIVITIES
                            .EXPERIENCE_ACTIVITIES_02_JPG
                        }
                        //   "./images/experience-activities/experience-activities-02.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="experience-slider-img"
                        src={
                          ASSETS.EXPERIENCE_ACTIVITIES
                            .EXPERIENCE_ACTIVITIES_03_JPG
                        }
                        //   "./images/experience-activities/experience-activities-03.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="experience-slider-img"
                        src={
                          ASSETS.EXPERIENCE_ACTIVITIES
                            .EXPERIENCE_ACTIVITIES_04_JPG
                        }
                        //   "./images/experience-activities/experience-activities-03.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="experience-slider-img"
                        src={
                          ASSETS.EXPERIENCE_ACTIVITIES
                            .EXPERIENCE_ACTIVITIES_05_JPG
                        }
                        //   "./images/experience-activities/experience-activities-03.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="experience-slider-img"
                        src={
                          ASSETS.EXPERIENCE_ACTIVITIES
                            .EXPERIENCE_ACTIVITIES_06_JPG
                        }
                        //   "./images/experience-activities/experience-activities-03.jpg"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className="custom_nav d-flex align-items-center">
                    <div className="swiper-scrollbar experience_activities_scrollbar swiper-scrollbar-horizontal"></div>
                    <div className="btn_nav_box d-flex align-items-center">
                      <div className="swiper-button-prev experience_activities_prev rounded-circle">
                        <svg
                          width="14"
                          height="24"
                          viewBox="0 0 14 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM4 10.5L2 10.5L2 13.5L4 13.5L4 10.5Z"
                            fill="#E02127"
                          />
                        </svg>
                      </div>
                      <div className="swiper-button-next experience_activities_next rounded-circle">
                        <svg
                          width="14"
                          height="24"
                          viewBox="0 0 14 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5L12 13.5L12 10.5L10 10.5L10 13.5Z"
                            fill="#E02127"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-luxury">
              <div className="sub-container">
                <h3 className="section-title">Experience Luxury</h3>
                <p className="luxury-subtitle">
                  Lorem Impsum dollar sit Lorem Impsum dollar sit
                </p>
                <p className="luxury-desc">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry'sis simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's Lorem Ipsumis simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry'sis
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's Lorem Ipsum
                </p>
              </div>
              <div className="container">
                <div className="grid">
                  <div className="grid-item div1">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_01}
                      // "./images/experience-luxury/experience -luxury-01.png"
                      alt=""
                    />
                  </div>
                  <div className="grid-item div3">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_02}
                      // "./images/experience-luxury/experience -luxury-02.png"
                      alt=""
                    />
                  </div>
                  <div className="grid-item div4">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_03}
                      // "./images/experience-luxury/experience -luxury-03.png"
                      alt=""
                    />
                  </div>
                  <div className="grid-item div5">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_04}
                      // "./images/experience-luxury/experience -luxury-04.png"
                      alt=""
                    />
                  </div>
                  <div className="grid-item div2">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_05}
                      // "./images/experience-luxury/experience -luxury-05.png"
                      alt=""
                    />
                  </div>
                  <div className="grid-item div7">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_06}
                      // "./images/experience-luxury/experience -luxury-06.png"
                      alt=""
                    />
                  </div>
                  <div className="grid-item div6">
                    <img
                      className="masonry-img"
                      src={ASSETS.EXPERIENCE_LUXURY.EXPERIENCE_LUXURY_07}
                      // "./images/experience-luxury/experience -luxury-07.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-taste">
              <div className="sub-container">
                <h3 className="section-title">Experience Taste</h3>
                <div className="row experience_taste-1">
                  <div className="col-lg-6 experience-slider-img-box">
                    <img
                      className="experience-taste-img"
                      src={ASSETS.EXPERIENCE_TASTE.EXPERIENCE_TASTE_01}
                      // "./images/experience-taste/experience-taste-01.png"
                      alt=""
                    />
                    <img
                      className="experience-taste-img experience-taste-img-dublicate"
                      src={ASSETS.EXPERIENCE_TASTE.EXPERIENCE_TASTE_01}
                      // "./images/experience-taste/experience-taste-01.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="slider-box">
                      {/* <!-- Swiper --> */}

                      <Swiper
                        modules={[
                          Scrollbar,
                          Navigation,
                          Autoplay,
                          Mousewheel,
                          Keyboard,
                        ]}
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        //  slidesPerView= {"auto"}
                        mousewheel={true}
                        keyboard={true}
                        freeMode={true}
                        grabCursor={true}
                        autoPlay={{ delay: 5000 }}
                        scrollbar={{ el: ".experience_taste_scrollbar" }}
                        navigation={{
                          nextEl: ".experience_taste_next",
                          prevEl: ".experience_taste_prev",
                        }}
                      >
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <h3 className="section-title">
                              Get your taste of the island
                            </h3>
                            <p className="luxury-subtitle">
                              Mauritian cuisine is an eclectic mix of European,
                              African, Indian and Asian flavours.
                            </p>
                            <p className="luxury-desc">
                              You’ll experience a palette of flavours that are
                              spicy, warming, and comforting. Immerse yourself
                              in local dishes harvested from the sea and
                              farm-to-table locally grown produce. Mauritius’
                              foodie experience is truly one-of-a-kind and
                              world-className.
                            </p>
                            <p className="luxury-subtitle">
                              Visit Mauritius Rating
                            </p>
                            <ul
                              className="rating-list flex-wrap d-flex align-items-center"
                              role="list"
                            >
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <h3 className="section-title">Experience Taste</h3>
                            <p className="luxury-subtitle">
                              Lorem Impsum dollar sit Lorem Impsum dollar sit
                            </p>
                            <p className="luxury-desc">
                              is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry'sis simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry's Lorem Ipsumis simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry'sis simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's Lorem Ipsum
                            </p>
                            <p className="luxury-subtitle">
                              Visit Mauritius Rating
                            </p>
                            <ul
                              className="rating-list flex-wrap d-flex align-items-center"
                              role="list"
                            >
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <h3 className="section-title">Experience Taste</h3>
                            <p className="luxury-subtitle">
                              Lorem Impsum dollar sit Lorem Impsum dollar sit
                            </p>
                            <p className="luxury-desc">
                              is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry'sis simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry's Lorem Ipsumis simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry'sis simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's Lorem Ipsum
                            </p>
                            <p className="luxury-subtitle">
                              Visit Mauritius Rating
                            </p>
                            <ul
                              className="rating-list flex-wrap d-flex align-items-center"
                              role="list"
                            >
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                              <li className="rating-item active">
                                <svg
                                  className="rating-icon"
                                  width="36"
                                  height="33"
                                  viewBox="0 0 36 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 1.61804L21.5657 12.5922L21.678 12.9377H22.0413H33.5802L24.245 19.7201L23.9511 19.9336L24.0634 20.2791L27.6291 31.2533L18.2939 24.4709L18 24.2574L17.7061 24.4709L8.37092 31.2533L11.9366 20.2791L12.0489 19.9336L11.755 19.7201L2.41983 12.9377H13.9587H14.322L14.4343 12.5922L18 1.61804Z"
                                    stroke="#E02127"
                                  />
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="swiper experience_taste">
                        <div className="custom_nav d-flex align-items-center">
                          <div className="btn_nav_box d-flex align-items-center">
                            <div className="swiper-button-prev experience_taste_prev rounded-circle">
                              <svg
                                width="14"
                                height="24"
                                viewBox="0 0 14 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM4 10.5L2 10.5L2 13.5L4 13.5L4 10.5Z"
                                  fill="#E02127"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="swiper-scrollbar experience_taste_scrollbar swiper-scrollbar-horizontal"></div>
                          <div className="btn_nav_box d-flex align-items-center">
                            <div className="swiper-button-next experience_taste_next rounded-circle">
                              <svg
                                width="14"
                                height="24"
                                viewBox="0 0 14 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5L12 13.5L12 10.5L10 10.5L10 13.5Z"
                                  fill="#E02127"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- back-to-top --> */}
      <BackToTop />
    </div>
  );
};

export default Experience;
