class ProductTotal {
    constructor(price) {
        this.price = price;
        this.li = document.createElement("li");
    }

    render() {
        const totalWrapper = document.createElement("div");
        const txtTotalPrice = document.createElement("strong");
        const totalContainer = document.createElement("div");
        totalWrapper.setAttribute("class", "style-wrapper-total");
        txtTotalPrice.setAttribute("class", "detail-txt-total-price");
        txtTotalPrice.innerText = "총 상품 금액";
        totalContainer.setAttribute("class", "style-container-total");

        const txtTotalQuantity = document.createElement("p");
        const numTotalPrice = document.createElement("strong");
        const txtTotalPriceUnit = document.createElement("span");
        txtTotalQuantity.setAttribute("class", "detail-txt-total-quantity");
        txtTotalQuantity.innerHTML = `
            총 수량 <span class="detail-number-total-quantity">1</span>개
        `;
        numTotalPrice.setAttribute("class", "detail-number-total-price");
        numTotalPrice.innerText = "17500";
        txtTotalPriceUnit.setAttribute("class", "detail-txt-total-price-unit");
        txtTotalPriceUnit.innerText = "원";

        totalContainer.append(
            txtTotalQuantity,
            numTotalPrice,
            txtTotalPriceUnit
        );
        totalWrapper.append(txtTotalPrice, totalContainer);
        this.li.appendChild(totalWrapper);
        return this.li;
    }
}

export default ProductTotal;
