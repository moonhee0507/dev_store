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

// 슬라이드 높이 확인하여 부모의 높이로 지정하기
for (let i = 0; i < slideCount; i++) {
    if (slideHeight < slide[i].offsetHeight) {
        slideHeight = slide[i].offsetHeight;
    }
}

slideWrapper.style.height = slideHeight + "px";
slideContainer.style.height = slideHeight + "px";

// 슬라이드가 있으면 가로로 배열하기
for (let i = 0; i < slideCount; i++) {
    slide[i].style.left = i * 100 + "%";
    // pagerItem을 slide 갯수만큼 만들기
    pagerHTML += `<span index="${i}"></span>`;
    pager.innerHTML = pagerHTML;
}
const pagerItem = document.querySelectorAll(".pager span");

// 슬라이드 이동 함수 (ul의 left 값 변경)
function moveSlide(index) {
    slideContainer.classList.add("animated");
    slideContainer.style.left = -100 * index + "%";
    currentIndex = index;

    // 모든 pager에 active를 제거하고, 클릭된 그 요소에만 active 추가
    for (let i = 0; i < pagerItem.length; i++) {
        pagerItem[i].classList.remove("active");
    }
    pagerItem[index].classList.add("active");
}

moveSlide(0);

// 다음 버튼을 클릭하면 할일, 이전 버튼을 클릭하면 할일
buttonPrev.addEventListener("click", function () {
    if (currentIndex === 0) {
        moveSlide(slideCount - 1);
    } else {
        moveSlide(currentIndex - 1);
    }
});
buttonNext.addEventListener("click", function () {
    if (currentIndex === slideCount - 1) {
        // 2번째 슬라이드에서 다음버튼 => 0번째로
        moveSlide(0);
    } else {
        moveSlide(currentIndex + 1);
    }
});

// 자동 슬라이드
function startAutoSlide() {
    timer = setInterval(function () {
        let nextIdx = (currentIndex + 1) % slideCount; // 나눈 나머지
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

// 페이저로 슬라이드 이동하기
for (let i = 0; i < pagerItem.length; i++) {
    pagerItem[i].addEventListener("click", function (event) {
        let pagerNum = parseInt(event.target.getAttribute("index"));

        moveSlide(pagerNum);
    });
}
