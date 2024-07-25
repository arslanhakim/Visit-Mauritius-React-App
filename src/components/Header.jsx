import "../lib/fontawesome/css/all.min.css";
import "../lib/jquery/jquery-3.5.1.min";
// import "../lib/bootstrap-5.2.0-dist/css/bootstrap.min.css";
import "../lib/jquery/jquery-3.5.1.min";
// import "../lib/bootstrap-5.2.0-dist/js/bootstrap.min";
// import "../lib/swiper.8.3.2/swiper-bundle.min.css";
// import "../lib/swiper.8.3.2/swiper-bundle.min";
import "../lib/TweenMax-1.18.4/TweenMax.min";
import "../js/main";
import "../css/main.css";
import { ASSETS } from "../assets/path";
import { NavLink } from "react-router-dom";

const Header = () => {
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
  return (
    <div id="header">
      <div className="brand-box">
        <NavLink to="/" className="brand-link navbar-brand">
          <img
            src={ASSETS.OPEN.LOGO_PNG}
            // "./images/logo.png"
            alt=""
            className="brand-img"
          />
        </NavLink>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
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
      </nav>
    </div>
  );
};

export default Header;
