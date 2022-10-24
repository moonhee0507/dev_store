class ResponsiveBackButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-back");
        const span = document.createElement("span");
        span.setAttribute("class", "sr-only");
        span.innerText = "뒤로가기";
        this.button.appendChild(span);

        this.button.addEventListener("click", removeSearchBar);
        const button = this.button;
        function removeSearchBar() {
            const h1 = document.querySelector(".dev-store");
            const nav = document.querySelector(".header-nav");
            const searchBar = document.querySelector(".style-search");
            h1.classList.remove("responsive");
            nav.classList.remove("responsive");
            searchBar.classList.remove("responsive");

            button.remove();
        }

        return this.button;
    }
}

export default ResponsiveBackButton;
