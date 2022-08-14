class ProductPrice {
    constructor(price) {
        this.price = price;
    }

    render() {
        // 가격
        const productPriceContainer = document.createElement("div");

        const productPrice = document.createElement("strong");
        productPrice.innerText = this.price;
        productPrice.setAttribute("class", "txt-price-number");
        productPriceContainer.appendChild(productPrice);

        const priceType = document.createElement("span");
        priceType.innerText = "원";
        priceType.setAttribute("class", "txt-price-unit");
        productPriceContainer.appendChild(priceType);

        return productPriceContainer;
    }
}

export default ProductPrice;
