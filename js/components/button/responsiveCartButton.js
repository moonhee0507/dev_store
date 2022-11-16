import { reqCart } from "../../common/api";

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

        if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginType") === "BUYER"
        ) {
            const showQt = document.createElement("em");
            showQt.setAttribute("class", "header-cart-qt");
            this.button.appendChild(showQt);
            const method = "GET";
            reqCart(method)
                .then((res) => res.json())
                .then((data) => (showQt.innerText = data.count))
                .catch((e) => console.error(e));
            this.button.addEventListener("click", () => {
                window.location.href = "/cart";
            });
        } else {
            this.button.addEventListener("click", () => {
                const body = document.querySelector("body");
                const modal = document.querySelector(".modal");
                modal.classList.add("show");
                if (modal.classList.contains("show")) {
                    body.style.overflow = "hidden";
                }
            });
        }

        return this.button;
    }
}

export default ResponsiveCartButton;
