class Slide {
    constructor() {
        this.slideBox = document.createElement("article");
    }

    render() {
        this.slideBox.setAttribute("class", "article-slide");
        const h2 = document.createElement("h2");
        h2.setAttribute("class", "sr-only");
        h2.innerText = "스토어 이벤트 안내용 슬라이드";

        const slideWrapper = document.createElement("div");
        slideWrapper.setAttribute("class", "slide-wrapper");

        const slideContainer = document.createElement("ul");
        slideContainer.setAttribute("class", "slide-container");

        const slide1 = document.createElement("li");
        slide1.setAttribute("class", "slide");

        const slide2 = document.createElement("li");
        slide2.setAttribute("class", "slide");

        const slide3 = document.createElement("li");
        slide3.setAttribute("class", "slide");

        const pager = document.createElement("p");
        pager.setAttribute("class", "pager");

        const buttonPrev = document.createElement("button");
        const buttonNext = document.createElement("button");
        buttonPrev.setAttribute("type", "button");
        buttonNext.setAttribute("type", "button");
        buttonPrev.setAttribute("class", "button-prev");
        buttonNext.setAttribute("class", "button-next");
        const txtPrev = document.createElement("span");
        const txtNext = document.createElement("span");
        txtPrev.setAttribute("class", "sr-only");
        txtNext.setAttribute("class", "sr-only");
        txtPrev.innerText = "앞으로 가기";
        txtNext.innerText = "뒤로 가기";
        buttonPrev.appendChild(txtPrev);
        buttonNext.appendChild(txtNext);

        const body = document.querySelector("body");
        const slideFeat = document.createElement("script");
        slideFeat.type = "module";
        slideFeat.src = "/logic/slideFeat.js";
        body.appendChild(slideFeat);

        slideWrapper.appendChild(slideContainer);
        slideWrapper.appendChild(pager);
        slideWrapper.appendChild(buttonPrev);
        slideWrapper.appendChild(buttonNext);
        slideContainer.append(slide1, slide2, slide3);
        this.slideBox.appendChild(h2);
        this.slideBox.appendChild(slideWrapper);

        return this.slideBox;
    }
}

export default Slide;
