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
        }
    }
}

export default ProductName;
