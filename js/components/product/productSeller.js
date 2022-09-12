import SellerInfoButton from "../button/sellerInfoButton";

class ProductSeller {
    constructor(store, seller) {
        this.store = store;
        this.seller = seller;
    }

    render() {
        const url = window.location.pathname;
        if (url === "/" || url.includes("/store")) {
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "txt-seller");
            productSeller.innerText = this.store;

            return productSeller;
        } else if (url.includes("/products/")) {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "detail-txt-seller");
            productSeller.innerText = this.store;
            li.appendChild(productSeller);
            return li;
        } else if (url === "/cart") {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "cart-txt-seller");
            productSeller.innerText = this.store;
            li.appendChild(productSeller);
            return li;
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "payment-txt-seller");
            productSeller.innerText = JSON.parse(
                window.localStorage.getItem("fromDetail")
            ).seller;
            li.appendChild(productSeller);
            return li;
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "payment-txt-seller");
            productSeller.innerText = this.store;
            li.appendChild(productSeller);
            return li;
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "payment-txt-seller");
            productSeller.innerText = JSON.parse(
                window.localStorage.getItem("fromCartOne")
            )[0].sellerName;
            li.appendChild(productSeller);
            return li;
        } else if (url.includes("/search")) {
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.setAttribute("class", "search-txt-seller");
            p.innerText = this.store;

            const sellerInfoButton = new SellerInfoButton(this.seller);
            div.append(p, sellerInfoButton.render());
            return div;
        }
    }
}

export default ProductSeller;
