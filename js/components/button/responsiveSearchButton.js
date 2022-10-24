import ResponsiveBackButton from "./responsiveBackButton.js";

class ResponsiveSearchButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-responsive-search");
        const span = document.createElement("span");
        span.setAttribute("class", "sr-only");
        span.innerText = "검색";
        this.button.appendChild(span);

        this.button.addEventListener("click", showSearchBar);
        function showSearchBar() {
            const h1 = document.querySelector(".dev-store");
            const nav = document.querySelector(".header-nav");
            const searchBar = document.querySelector(".style-search");
            const styleWrapper = document.querySelector(".style-wrapper");
            h1.classList.add("responsive");
            nav.classList.add("responsive");
            searchBar.classList.add("responsive");

            const responsiveBackButton = new ResponsiveBackButton();
            styleWrapper.firstChild.after(responsiveBackButton.render());
        }

        return this.button;
    }
}

export default ResponsiveSearchButton;
