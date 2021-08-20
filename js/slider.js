const slideImage1 = document.querySelectorAll(".slides");
const slidesContainer1 = document.querySelector(".slides-container");
const nextBtn1 = document.querySelector(".next-btn");
const prevBtn1 = document.querySelector(".prev-btn");
const navigationDots1 = document.querySelector(".navigation-dots");

const slideImage2 = document.querySelectorAll(".one");
const slidesContainer2 = document.querySelector(".container-slides");
const nextBtn2 = document.querySelector(".nextone__btn");
const prevBtn2 = document.querySelector(".previous__btn");
const navigationDots2 = document.querySelector(".nav-dots");

const slideImage3 = document.querySelectorAll(".review");
const slidesContainer3 = document.querySelector(".reviews_container");
const nextBtn3 = document.querySelector(".next-btn");
const prevBtn3 = document.querySelector(".prev-btn");
const navigationDots3 = document.querySelector(".review_dots");

const slideImage4 = document.querySelectorAll(".desktop_slides");
const slidesContainer4 = document.querySelector(".desktop_container");
const nextBtn4 = document.querySelector(".next-btn");
const prevBtn4 = document.querySelector(".prev-btn");
const navigationDots4 = document.querySelector(".desktop_dots");

const slideImage5 = document.querySelectorAll(".desktop_reviews_slider");
const slidesContainer5 = document.querySelector(".desktop_reviews_container");
const nextBtn5 = document.querySelector(".next-btn");
const prevBtn5 = document.querySelector(".prev-btn");
const navigationDots5 = document.querySelector(".desktop_review_dots");

let numberOfImages1 = slideImage1.length;
let slideWidth1 = slideImage1[0].clientWidth;
let currentSlide1 = 0;

let numberOfImages2 = slideImage2.length;
let slideWidth2 = slideImage2[0].clientWidth;
let currentSlide2 = 0;

let numberOfImages3 = slideImage3.length;
let slideWidth3 = slideImage3[0].clientWidth;
let currentSlide3 = 0;

let numberOfImages4 = slideImage4.length;
let slideWidth4 = slideImage4[0].clientWidth;
let currentSlide4 = 0;

let numberOfImages5 = slideImage5.length;
let slideWidth5 = slideImage4[0].clientWidth;
let currentSlide5 = 0;

const init = () => {
  sliderInit(slideImage1);
  sliderInit(slideImage2);
  sliderInit(slideImage3);
  sliderInit(slideImage4);
  sliderInit(slideImage5);

  createNavigationDots(
    numberOfImages1,
    currentSlide1,
    navigationDots1,
    slidesContainer1,
    slideImage1,
    "single-dot",
    slideWidth1
  );

  createNavigationDots(
    numberOfImages2,
    currentSlide2,
    navigationDots2,
    slidesContainer2,
    slideImage2,
    "dot-single",
    slideWidth2
  );
  createNavigationDots(
    numberOfImages3,
    currentSlide3,
    navigationDots3,
    slidesContainer3,
    slideImage3,
    "review_dot_single",
    slideWidth3
  );
  createNavigationDots(
    numberOfImages4,
    currentSlide4,
    navigationDots4,
    slidesContainer4,
    slideImage4,
    "desktop_dot_single",
    slideWidth4
  );
  createNavigationDots(
    numberOfImages5,
    currentSlide5,
    navigationDots5,
    slidesContainer5,
    slideImage5,
    "desktop_alone_dot",
    slideWidth5
  );
};

function sliderInit(sliderImages) {
  sliderImages.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  sliderImages[0].classList.add("active");
}

function createNavigationDots(
  numOfImages,
  currentSlide,
  dots,
  slidesContainer,
  slideImage,
  dotClass,
  slideWidth
) {
  for (let i = 0; i < numOfImages; i++) {
    let dot = document.createElement("div");
    dot.classList.add(dotClass);
    dots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(
        i,
        slidesContainer,
        currentSlide,
        slideImage,
        dots,
        dotClass,
        slideWidth
      );
    });
  }
  dots.children[0].classList.add("active");
}

function goToSlide(
  slideNumber,
  slidesContainer,
  currentSlide,
  slideImage,
  dots,
  dotClass,
  slideWidth
) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";
  currentSlide = slideNumber;
  setActiveClass(slideImage, dots, currentSlide, dotClass);
}

function setActiveClass(slideImage, dots, currentSlide,  dotClass) {
  //.slides.active

  slideImage[currentSlide].classList.add("active");
  //.single-dot.active
    for(let i = 0; i< dots.children.length ; i++) dots.children[i].classList.remove("active")
  
  dots.children[currentSlide].classList.add("active");
}

init();
