class ProductPrice {
    constructor(price) {
        this.price = price;
    }

    render() {
        if (window.location.pathname === "/") {
            const productPriceContainer = document.createElement("div");

            const productPrice = document.createElement("strong");
            productPrice.innerText = this.price.toLocaleString("ko-KR");
            productPrice.setAttribute("class", "txt-price-number");
            productPriceContainer.appendChild(productPrice);

            const priceType = document.createElement("span");
            priceType.innerText = "원";
            priceType.setAttribute("class", "txt-price-unit");
            productPriceContainer.appendChild(priceType);

            return productPriceContainer;
        } else if (window.location.pathname.includes("/products/")) {
            const li = document.createElement("li");
            const container = document.createElement("div");
            container.setAttribute("class", "detail-product-price");

            const productPrice = document.createElement("strong");
            productPrice.innerText = this.price.toLocaleString("ko-KR");
            productPrice.setAttribute("class", "detail-txt-price-number");

            const priceType = document.createElement("span");
            priceType.innerText = "원";
            priceType.setAttribute("class", "detail-txt-price-unit");

            container.append(productPrice, priceType);
            li.appendChild(container);

            return li;
        }
    }
}

export default ProductPrice;
