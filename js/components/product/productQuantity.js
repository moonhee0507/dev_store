class ProductQuantity {
    constructor() {
        this.quantityWrapper = document.createElement("div");
    }

    render() {
        this.quantityWrapper.setAttribute("class", "style-wrapper-quantity");
        const minusButton = document.createElement("button");
        const quantityInput = document.createElement("input");
        const plusButton = document.createElement("button");

        minusButton.setAttribute("type", "button");
        plusButton.setAttribute("type", "button");
        minusButton.setAttribute("class", "button-quantity minus");
        plusButton.setAttribute("class", "button-quantity plus");
        quantityInput.setAttribute("class", "input-quantity");
        quantityInput.setAttribute("type", "number");
        quantityInput.setAttribute("value", "1");

        const txtMinus = document.createElement("span");
        const txtPlus = document.createElement("span");
        txtMinus.setAttribute("class", "sr-only");
        txtPlus.setAttribute("class", "sr-only");
        txtMinus.innerText = "구매 수량 빼기";
        txtPlus.innerText = "구매 수량 더하기";

        minusButton.appendChild(txtMinus);
        plusButton.appendChild(txtPlus);
        this.quantityWrapper.append(minusButton, quantityInput, plusButton);

        return this.quantityWrapper;
    }
}
export default ProductQuantity;
