import Header from "../components/header/header";
import CartList from "../components/cartList/cartList";
import CartTotal from "../components/cartTotal/cartTotal";
import { BuyNowButton } from "../components/button/index.js";
import Footer from "../components/footer/footer";

class Cart {
    constructor(header, cartList, cartTotal, buyNowButton, footer) {
        this.header = header;
        this.cartList = cartList;
        this.cartTotal = cartTotal;
        this.buyNowButton = buyNowButton;
        this.footer = footer;
    }

    render() {
        this.header = new Header();
        this.cartList = new CartList();
        this.cartTotal = new CartTotal();
        this.buyNowButton = new BuyNowButton();
        const changeModalGroup = document.createElement("div");
        changeModalGroup.setAttribute("class", "change-modal-group");
        const deleteModalGroup = document.createElement("div");
        deleteModalGroup.setAttribute("class", "delete-modal-group");
        this.footer = new Footer();

        // header
        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        // main
        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.cartList.render());
        main.appendChild(this.cartTotal.render());
        main.appendChild(this.buyNowButton.render());
        main.appendChild(changeModalGroup);
        main.appendChild(deleteModalGroup);

        // footer
        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        // 스크립트
        setTimeout(() => {
            const body = document.querySelector("body");
            const cartTotalFeat = document.createElement("script");
            cartTotalFeat.type = "module";
            cartTotalFeat.src = "../js/cartTotalFeat.js";
            body.appendChild(cartTotalFeat);
        }, 2000);

        document.getElementById("root").append(header, main, footer);
    }
}
export default Cart;
