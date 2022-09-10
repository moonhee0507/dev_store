class SortOrder {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "sort-order");

        const lowPriceOrder = document.createElement("a");
        lowPriceOrder.setAttribute("class", "sort low-price");
        lowPriceOrder.innerText = "낮은 가격순";

        const highPriceOrder = document.createElement("a");
        highPriceOrder.setAttribute("class", "sort high-price");
        highPriceOrder.innerText = "높은 가격순";

        const createdOrder = document.createElement("a");
        createdOrder.setAttribute("class", "sort created");
        createdOrder.innerText = "등록일순";

        this.div.appendChild(lowPriceOrder);
        this.div.appendChild(highPriceOrder);
        this.div.appendChild(createdOrder);

        return this.div;
    }
}

export default SortOrder;
