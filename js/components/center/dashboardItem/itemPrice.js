class ItemPrice {
    constructor(price) {
        this.price = price;
        this.strong = document.createElement("strong");
    }

    render() {
        this.strong.setAttribute("class", "center-num-price");
        const price = this.price.toLocaleString("ko-KR");
        const span = document.createElement("span");
        span.setAttribute("class", "center-unit-price");
        span.innerText = "원";
        this.strong.append(price, span);

        return this.strong;
    }
}
export default ItemPrice;
