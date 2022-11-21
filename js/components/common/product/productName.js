class ProductName {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    render() {
        const url = window.location.pathname;

        if (url === "/" || url.includes("/store")) {
            const productName = document.createElement("strong");
            productName.setAttribute("class", "txt-product-name");
            productName.innerText = this.name;

            return productName;
        } else if (url.includes("/products/")) {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "detail-txt-product-name");
            productName.innerText = this.name;
            li.appendChild(productName);

            return li;
        } else if (url === "/cart") {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "cart-txt-product-name");
            productName.innerText = this.name;
            li.appendChild(productName);

            return li;
        } else if (
            url === "/payment" &&
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
            url === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            const li = document.createElement("li");
            const productName = document.createElement("strong");
            productName.setAttribute("class", "payment-txt-product-name");
            productName.innerText = this.name;
            li.appendChild(productName);

            return li;
        } else if (
            url === "/payment" &&
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
        } else if (url.includes("/search")) {
            let isGrid = window.localStorage.getItem("grid") ? true : false;
            const strong = document.createElement("strong");
            strong.innerText = this.name;

            if (isGrid) {
                strong.setAttribute("class", "txt-product-name");
                return strong;
            } else {
                const a = document.createElement("a");
                a.setAttribute("href", `/products/${this.id}`);
                a.setAttribute("class", "link-search-name");
                strong.setAttribute("class", "search-txt-product-name");
                a.appendChild(strong);
                return a;
            }
        }
    }
}

export default ProductName;
