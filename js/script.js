"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger"),
    navbar = document.getElementById("navbar"),
    mobileNav = document.getElementById("header__hidden-menu"),
    headerLi = document.querySelectorAll(".header__bottom-li"),
    headerExtra = document.querySelector(".header__hidden-menu-extra");

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
      currentLi
        .querySelector(".header__bottom-dropdown")
        .classList.add("header__bottom-dropdown-active");
    });
    el.addEventListener("mouseleave", (e) => {
      let currentLi = e.currentTarget;
      currentLi
        .querySelector(".header__bottom-dropdown")
        .classList.remove("header__bottom-dropdown-active");
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
    } else {
      navbar.classList.remove("header__bottom-sticky");
    }
  };
  console.log(headerExtra);

  const handleExtraMenu = () => {
    console.log(666);
    headerExtra
      .querySelector(".header__hidden-menu-extra-wrapper")
      .classList.toggle("header__hidden-menu-extra-wrapper-active");
  };

  headerExtra.addEventListener("click", handleExtraMenu);
});
const scrollAnimation = document.querySelector(".about-us__factory");
const scrollAnimationOffset =
  scrollAnimation.offsetTop - window.innerHeight + scrollAnimation.offsetHeight / 2;

const handleScroll = () => {
  if (window.pageYOffset > scrollAnimationOffset) {
    scrollAnimation.classList.add("about-us__factory-active");
  }
};

console.log(scrollAnimationOffset, scrollAnimation);

window.addEventListener("scroll", handleScroll);
