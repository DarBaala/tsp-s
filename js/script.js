"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger"),
    navbar = document.getElementById("navbar"),
    mobileNav = document.getElementById("header__hidden-menu"),
    headerLi = document.querySelectorAll(".header__bottom-li"),
    headerExtra = document.querySelectorAll(".header__hidden-menu-extra");

  headerLi.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      let currentLi = e.currentTarget;
      headerLi.forEach((el) => {
        if (el !== currentLi) {
          if (el.querySelector(".header__bottom-dropdown")) {
            el.querySelector(".header__bottom-dropdown").classList.remove(
              "header__bottom-dropdown-active"
            );
          }
        }
      });
      if (currentLi.querySelector(".header__bottom-dropdown")) {
        currentLi
          .querySelector(".header__bottom-dropdown")
          .classList.add("header__bottom-dropdown-active");
      }
    });
    el.addEventListener("mouseleave", (e) => {
      let currentLi = e.currentTarget;
      if (currentLi.querySelector(".header__bottom-dropdown")) {
        currentLi
          .querySelector(".header__bottom-dropdown")
          .classList.remove("header__bottom-dropdown-active");
      }

      headerLi.forEach((el) => {
        if (el !== currentLi) {
          if (el.querySelector(".header__bottom-dropdown")) {
            el.querySelector(".header__bottom-dropdown").classList.remove(
              "header__bottom-dropdown-active"
            );
          }
        }
      });
    });
  });

  const handleBurger = () => {
    burger.classList.toggle("header__burger-active");
    mobileNav.classList.toggle("header__hidden-menu-active");
  };

  burger.addEventListener("click", handleBurger);

  window.onscroll = function () {
    scrollingOn();
  };

  const sticky = navbar.offsetTop;

  const scrollingOn = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("header__bottom-sticky");
    } else if (window.pageYOffset === 0) {
      navbar.classList.remove("header__bottom-sticky");
    } else {
      navbar.classList.remove("header__bottom-sticky");
    }
  };

  headerExtra.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentLi = e.currentTarget;
      headerExtra.forEach((el) => {
        if (currentLi !== el) {
          el.querySelector(".header__hidden-menu-extra-wrapper").classList.remove(
            "header__hidden-menu-extra-wrapper-active"
          );
        }
      });
      currentLi
        .querySelector(".header__hidden-menu-extra-wrapper")
        .classList.toggle("header__hidden-menu-extra-wrapper-active");
    });
  });

  const paramsString = document.location.pathname;
  if (paramsString === "/" || paramsString === "/index.html") {
    const scrollAnimation = document.querySelector(".about-us__factory");
    let scrollAnimationOffset =
      scrollAnimation.offsetTop - window.innerHeight + scrollAnimation.offsetHeight / 2;
    const handleScroll = () => {
      if (!scrollAnimation) {
        return;
      }
      if (window.pageYOffset > scrollAnimationOffset - 210) {
        scrollAnimation.classList.add("about-us__factory-active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const arrLi = document.querySelector(".video__banner").querySelectorAll("li");
    arrLi.forEach((el) => {
      el.addEventListener("mouseenter", (e) => {
        const screenWidth = window.screen.width;
        let currentLi = e.currentTarget;
        let p = currentLi.querySelector("p");
        anime({
          targets: currentLi,
          p,
          translateX: screenWidth < 620 ? 20 : 50,
        });
        const div = document.querySelector(".video__drop-block");
        setTimeout(() => {
          anime({
            targets: div,
            translateX: +20,
          });
        }, 400);
      });
    });

    arrLi.forEach((el) => {
      el.addEventListener("mouseleave", (e) => {
        let currentLi = e.currentTarget;
        let p = currentLi.querySelector("p");
        const div = document.querySelector(".video__drop-block");
        setTimeout(() => {
          anime({
            targets: currentLi,
            p,
            translateX: 0,
          });
          anime({
            targets: div,
            translateX: 0,
          });
        }, 200);
      });
    });
  }
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
