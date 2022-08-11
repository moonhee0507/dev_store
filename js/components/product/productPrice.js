class ProductPrice {
    constructor(price) {
        this.price = price;
    }

    render() {
        // 가격
        const productPriceContainer = document.createElement("div");

        const productPrice = document.createElement("strong");
        productPrice.innerText = this.price;
        productPriceContainer.appendChild(productPrice);

        const priceType = document.createElement("span");
        priceType.innerText = "원";
        productPriceContainer.appendChild(priceType);

        return productPriceContainer;
    }
}

export default ProductPrice;
