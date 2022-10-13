const slideWrapper = document.querySelector(".slide-wrapper");
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelectorAll(".slide");
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
let slideHeight = 0;
let slideCount = slide.length;
let currentIndex = 0;
let timer = null;
const pager = document.querySelector(".pager");
let pagerHTML = "";

for (let i = 0; i < slideCount; i++) {
    if (slideHeight < slide[i].offsetHeight) {
        slideHeight = slide[i].offsetHeight;
    }
}

slideWrapper.style.height = slideHeight + "px";
slideContainer.style.height = slideHeight + "px";

for (let i = 0; i < slideCount; i++) {
    slide[i].style.left = i * 100 + "%";
    pagerHTML += `<span index="${i}"></span>`;
    pager.innerHTML = pagerHTML;
}
const pagerItem = document.querySelectorAll(".pager span");

function moveSlide(index) {
    slideContainer.classList.add("animated");
    slideContainer.style.left = -100 * index + "%";
    currentIndex = index;

    for (let i = 0; i < pagerItem.length; i++) {
        pagerItem[i].classList.remove("active");
    }
    pagerItem[index].classList.add("active");
}

moveSlide(0);

buttonPrev.addEventListener("click", function () {
    if (currentIndex === 0) {
        moveSlide(slideCount - 1);
    } else {
        moveSlide(currentIndex - 1);
    }
});
buttonNext.addEventListener("click", function () {
    if (currentIndex === slideCount - 1) {
        moveSlide(0);
    } else {
        moveSlide(currentIndex + 1);
    }
});

function startAutoSlide() {
    timer = setInterval(function () {
        let nextIdx = (currentIndex + 1) % slideCount;
        moveSlide(nextIdx);
    }, 3000);
}

startAutoSlide();

function stopAutoSlide() {
    clearInterval(timer);
}

slideWrapper.addEventListener("mouseenter", function () {
    stopAutoSlide();
});
slideWrapper.addEventListener("mouseleave", function () {
    startAutoSlide();
});

for (let i = 0; i < pagerItem.length; i++) {
    pagerItem[i].addEventListener("click", function (event) {
        let pagerNum = parseInt(event.target.getAttribute("index"));

        moveSlide(pagerNum);
    });
}
