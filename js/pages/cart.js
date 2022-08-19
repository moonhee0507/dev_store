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

        // footer
        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        document.getElementById("root").append(header, main, footer);
    }
}
export default Cart;
