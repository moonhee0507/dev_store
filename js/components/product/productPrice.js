class ProductPrice {
    constructor(price) {
        this.price = price;
    }

    render() {
        const url = window.location.pathname;

        if (url === "/" || url.includes("/store")) {
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
        } else if (url.includes("/products/")) {
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
        } else if (url === "/cart") {
            const li = document.createElement("li");
            const container = document.createElement("div");
            container.setAttribute("class", "cart-product-price");

            const productPrice = document.createElement("strong");
            productPrice.innerText = this.price.toLocaleString("ko-KR");
            productPrice.setAttribute("class", "cart-txt-price-number");

            const priceType = document.createElement("span");
            priceType.innerText = "원";
            priceType.setAttribute("class", "cart-txt-price-unit");

            container.append(productPrice, priceType);
            li.appendChild(container);

            return li;
        } else if (url.includes("/search")) {
            const div = document.createElement("div");
            div.setAttribute("class", "search-product-price");
            const strong = document.createElement("strong");
            strong.setAttribute("class", "search-number-price");
            strong.innerText = this.price.toLocaleString("ko-KR");
            const span = document.createElement("span");
            span.setAttribute("class", "search-txt-unit");
            span.innerText = "원";

            div.append(strong, span);

            return div;
        }
    }
}

export default ProductPrice;
