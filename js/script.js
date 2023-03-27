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
        let div = currentLi.querySelector(".header__bottom-dropdown-active");
        anime({
          targets: div,

          easing: "easeOutElastic(1, .8)",
          loop: true,
        });
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

  const arrLi = document.querySelector(".video__banner").querySelectorAll("li");
  console.log(arrLi);

  arrLi.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      let currentLi = e.currentTarget;
      let p = currentLi.querySelector("p");
      let span = currentLi.querySelector("span");
      console.log(p, span);
      anime({
        targets: currentLi,
        p,
        translateX: 50,
      });
      const div = document.querySelector(".video__drop-block");
      setTimeout(() => {
        anime({
          targets: div,
          translateX: +20,
        });
      }, 400);
      // setTimeout(() => {
      //   if (document.querySelector(".video__wrapper").querySelector(".video__drop-block")) {
      //     const div = document.querySelector(".video__drop-block");
      //     div.remove();
      //     const wrapper = document.createElement("div");
      //     wrapper.classList.add("video__drop-block");
      //     const myDiv = document.querySelector(".video__wrapper");
      //     myDiv.appendChild(wrapper);
      //   } else {
      //     const wrapper = document.createElement("div");
      //     wrapper.classList.add("video__drop-block");
      //     const myDiv = document.querySelector(".video__wrapper");
      //     myDiv.appendChild(wrapper);
      //   }
      // }, 300);
      // const elementPi = currentLi.parentNode.appendChild(document.createElement("p"));
      // elementPi.textContent = "lfqllfweew";
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
});
