import Header from "../components/header/header.js";
import CartList from "../components/cartList/cartList.js";
import CartTotal from "../components/cartTotal/cartTotal.js";
import { BuyNowButton } from "../components/button/index.js";
import Footer from "../components/footer/footer.js";
import Loading from "../common/loading.js";

class Cart {
    constructor(header, cartList, cartTotal, buyNowButton, footer) {
        this.header = header;
        this.cartList = cartList;
        this.cartTotal = cartTotal;
        this.buyNowButton = buyNowButton;
        this.footer = footer;
    }

    render() {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=1200";
        document.querySelector("head").appendChild(meta);

        const loading = new Loading();
        const root = document.getElementById("root");
        root.appendChild(loading.render());

        this.header = new Header();
        this.cartList = new CartList();
        this.cartTotal = new CartTotal();
        this.buyNowButton = new BuyNowButton();
        const changeModalGroup = document.createElement("div");
        changeModalGroup.setAttribute("class", "change-modal-group");
        const deleteModalGroup = document.createElement("div");
        deleteModalGroup.setAttribute("class", "delete-modal-group");
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.cartList.render());
        main.appendChild(this.cartTotal.render());
        main.appendChild(this.buyNowButton.render());
        main.appendChild(changeModalGroup);
        main.appendChild(deleteModalGroup);

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        setTimeout(() => {
            const body = document.querySelector("body");
            const cartTotalFeat = document.createElement("script");
            cartTotalFeat.type = "module";
            cartTotalFeat.src = "/logic/cartTotalFeat.js";
            body.appendChild(cartTotalFeat);
            root.removeChild(root.firstChild);
        }, 1500);

        document.getElementById("root").append(header, main, footer);
    }
}
export default Cart;
