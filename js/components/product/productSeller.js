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
        }
    }
}

export default ProductSeller;
