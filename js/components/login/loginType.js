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

        return this.container;
    }
}

export default LoginType;
