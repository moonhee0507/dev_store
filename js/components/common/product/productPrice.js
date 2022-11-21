class ProductPrice {
    constructor(price) {
        this.price = price;
    }

    render() {
        const url = window.location.pathname;

        if (url === "/" || url.includes("/store")) {
            const productPriceContainer = document.createElement("div");
            productPriceContainer.setAttribute("class", "card-container-price");

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
            const strong = document.createElement("strong");
            strong.innerText = this.price.toLocaleString("ko-KR");
            const span = document.createElement("span");
            span.innerText = "원";

            div.append(strong, span);

            let isGrid = window.localStorage.getItem("grid") ? true : false;
            if (isGrid) {
                div.setAttribute("class", "card-container-price");
                strong.setAttribute("class", "txt-price-number");
                span.setAttribute("class", "txt-price-unit");
            } else {
                div.setAttribute("class", "search-product-price");
                strong.setAttribute("class", "search-number-price");
                span.setAttribute("class", "search-txt-unit");
            }

            return div;
        }
    }
}

export default ProductPrice;
