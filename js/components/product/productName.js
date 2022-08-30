class ProductName {
    constructor(name) {
        this.name = name;
    }

    render() {
        if (window.location.pathname === "/") {
            const productName = document.createElement("strong");
            productName.setAttribute("class", "txt-product-name");
            productName.innerText = this.name;

            return productName;
        } else if (window.location.pathname.includes("/products/")) {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "detail-txt-product-name");
            productName.innerText = this.name;
            li.appendChild(productName);

            return li;
        } else if (window.location.pathname === "/cart") {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "cart-txt-product-name");
            productName.innerText = this.name;
            li.appendChild(productName);

            return li;
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "payment-txt-product-name");
            productName.innerText = JSON.parse(
                window.localStorage.getItem("fromDetail")
            ).productName;
            li.appendChild(productName);

            return li;
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "payment-txt-product-name");
            productName.innerText = this.name;
            li.appendChild(productName);

            return li;
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "payment-txt-product-name");
            productName.innerText = JSON.parse(
                window.localStorage.getItem("fromCartOne")
            )[0].productName;
            li.appendChild(productName);

            return li;
        }
    }
}

export default ProductName;
