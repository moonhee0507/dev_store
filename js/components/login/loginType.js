import { BuyerButton, SellerButton } from "../button/index.js";

class LoginType {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.classList.add("login-type");
        const buyerButton = new BuyerButton();
        const sellerButton = new SellerButton();
        this.container.appendChild(buyerButton.render());
        this.container.appendChild(sellerButton.render());

        let loginType = "BUYER";
        localStorage.setItem("loginType", loginType);

        let buttonLoginType = [buyerButton.render(), sellerButton.render()];
        for (let i = 0; i < buttonLoginType.length; i++) {
            buttonLoginType[i].addEventListener("click", () => {
                initializeStyle();
                buttonLoginType[i].style.backgroundColor = "inherit";
                loginType = buttonLoginType[i].value;
                localStorage.setItem("loginType", loginType);

                if (i === 0) {
                    buttonLoginType[i + 1].classList.remove("on");
                    buttonLoginType[i].classList.remove("help");
                    buttonLoginType[i].classList.add("on");
                    buttonLoginType[i + 1].classList.add("help");
                } else if (i === 1) {
                    buttonLoginType[i - 1].classList.remove("on");
                    buttonLoginType[i].classList.remove("help");
                    buttonLoginType[i].classList.add("on");
                    buttonLoginType[i - 1].classList.add("help");
                }
            });
        }
        function initializeStyle() {
            for (let i = 0; i < buttonLoginType.length; i++) {
                buttonLoginType[i].style.backgroundColor = "#e9e9e9";
            }
        }

        return this.container;
    }
}

export default LoginType;
