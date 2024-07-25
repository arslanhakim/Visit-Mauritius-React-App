// import { $ } from "jquery";
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     // document.getElementById("header").style.fontSize = "30px";
//     $("#header").addClass("fixed");
//   } else {
//     // document.getElementById("header").style.fontSize = "90px";
//     $("#header").removeClass("fixed");
//   }
// }

// capture scroll
window.scroll(function () {
  var top = $(window).scrollTop(),
    winHeight = $("body").height();

  var scroll = (top / winHeight) * 100;

  document.getElementById("#progressBar").css("top", scroll + "%");
});

//   slidesPerView: 3,
//   centeredSlides: false,
//   slidesPerGroupSkip: 1,
//   // slidesPerView: "auto",
//   mousewheel: true,
//   keyboard: true,
//   freeMode: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 5000,
//   },
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//     },
//     480: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//   },
//   scrollbar: {
//     el: ".experience_activities_scrollbar",
//   },
//   navigation: {
//     nextEl: ".experience_activities_next",
//     prevEl: ".experience_activities_prev",
//   },
// });

// var swiper = new Swiper(".experience_taste", {
//   slidesPerView: 1,
//   // centeredSlides: false,
//   // slidesPerGroupSkip: 1,
//   // slidesPerView: "auto",
//   mousewheel: true,
//   keyboard: true,
//   // freeMode: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 5000,
//   },
//   keyboard: {
//     enabled: true,
//   },
//   scrollbar: {
//     el: ".experience_taste_scrollbar",
//   },
//   navigation: {
//     nextEl: ".experience_taste_next",
//     prevEl: ".experience_taste_prev",
//   },
// });

(function () {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;
    let elementPos = select(el).offsetTop;
    window.scrollTo({ top: elementPos - offset, behavior: "smooth" });
  };
  // let backtotop = select(".back-to-top");
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add("active");
  //     } else {
  //       backtotop.classList.remove("active");
  //     }
  //   };
  //   window.addEventListener("load", toggleBacktotop);
  //   onscroll(document, toggleBacktotop);
  // }
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("ri-menu-line");
    this.classList.toggle("ri-close-line");
  });
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );
})();

// document.getElementById("#cookies-notify button").on("click touch", function () {
//   $("#cookies-notify").toggle();
// });
