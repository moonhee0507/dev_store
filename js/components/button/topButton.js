class TopButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-top");
        this.button.innerText = "TOP";
        this.button.title = "맨위로";

        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                this.button.classList.add("show");
            } else {
                this.button.classList.remove("show");
            }
        });

        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return this.button;
    }
}

export default TopButton;
