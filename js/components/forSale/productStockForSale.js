class ProductStockForSale {
    constructor(stock) {
        this.stock = stock;
        this.p = document.createElement("p");
    }

    render() {
        this.p.setAttribute("class", "center-txt-stock");

        const span = document.createElement("span");
        span.setAttribute("class", "center-num-stock");
        span.innerText = this.stock;
        this.p.append("재고: ", span);

        return this.p;
    }
}

export default ProductStockForSale;
