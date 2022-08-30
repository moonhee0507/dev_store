class ProductSeller {
    constructor(store) {
        this.store = store;
    }

    render() {
        if (window.location.pathname === "/") {
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "txt-seller");
            productSeller.innerText = this.store;

            return productSeller;
        } else if (window.location.pathname.includes("/products/")) {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "detail-txt-seller");
            productSeller.innerText = this.store;
            li.appendChild(productSeller);
            return li;
        } else if (window.location.pathname === "/cart") {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "cart-txt-seller");
            productSeller.innerText = this.store;
            li.appendChild(productSeller);
            return li;
        } else if (
            window.location.pathname === "/payment" &&
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
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            const li = document.createElement("li");
            const productSeller = document.createElement("p");
            productSeller.setAttribute("class", "payment-txt-seller");
            productSeller.innerText = this.store;
            li.appendChild(productSeller);
            return li;
        } else if (
            window.location.pathname === "/payment" &&
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
        }
    }
}

export default ProductSeller;
