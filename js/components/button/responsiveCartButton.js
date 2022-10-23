class ResponsiveCartButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "link-list cart");
        const span = document.createElement("span");
        span.setAttribute("class", "txt-cart");
        span.innerText = "장바구니";
        this.button.appendChild(span);

        this.button.addEventListener("click", () => {
            const body = document.querySelector("body");
            const modal = document.querySelector(".modal");
            modal.classList.add("show");
            if (modal.classList.contains("show")) {
                body.style.overflow = "hidden";
            }
        });

        return this.button;
    }
}

export default ResponsiveCartButton;
