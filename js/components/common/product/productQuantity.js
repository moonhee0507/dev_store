class ProductQuantity {
    constructor(stock, price, quantity, cart_item_id, is_active, product_id) {
        this.stock = stock;
        this.price = price;
        this.quantity = quantity;
        this.cart_item_id = cart_item_id;
        this.is_active = is_active;
        this.product_id = product_id;
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
        quantityInput.setAttribute("class", "input-quantity cart");
        quantityInput.setAttribute("type", "number");
        quantityInput.setAttribute("value", "1");
        quantityInput.setAttribute("readOnly", "true");

        const txtMinus = document.createElement("span");
        const txtPlus = document.createElement("span");
        txtMinus.setAttribute("class", "sr-only");
        txtPlus.setAttribute("class", "sr-only");
        txtMinus.innerText = "구매 수량 빼기";
        txtPlus.innerText = "구매 수량 더하기";

        let qt = parseInt(quantityInput.value);
        if (this.stock === 0) {
            quantityInput.value = `${0}`;
            plusButton.disabled = true;
            quantityInput.disabled = true;
            minusButton.disabled = true;
            plusButton.style.cursor = "default";
            minusButton.style.cursor = "default";
        }

        if (window.location.pathname.includes("/products/")) {
            const txtStock = document.createElement("p");
            txtStock.setAttribute("class", "txt-stock");
            txtStock.innerHTML = `
                * 재고 : <span class="num-stock">${this.stock}</span>개
            `;

            minusButton.appendChild(txtMinus);
            plusButton.appendChild(txtPlus);
            this.quantityWrapper.append(
                minusButton,
                quantityInput,
                plusButton,
                txtStock
            );

            plusButton.addEventListener("click", () => {
                if (this.stock === qt) {
                    plusButton.disabled = true;
                } else {
                    qt += 1;
                    quantityInput.value = `${qt}`;
                    document.querySelector(
                        ".detail-number-total-quantity"
                    ).innerText = `${qt}`;
                    document.querySelector(
                        ".detail-number-total-price"
                    ).innerText = (qt * this.price).toLocaleString("ko-KR");
                }
            });

            minusButton.addEventListener("click", () => {
                if (qt > 1) {
                    qt -= 1;
                    quantityInput.value = `${qt}`;
                    document.querySelector(
                        ".detail-number-total-quantity"
                    ).innerText = `${qt}`;
                    document.querySelector(
                        ".detail-number-total-price"
                    ).innerText = (qt * this.price).toLocaleString("ko-KR");
                }
            });
        } else if (window.location.pathname === "/cart") {
            this.quantityWrapper.classList.add("cart");
            quantityInput.value = this.quantity;

            minusButton.appendChild(txtMinus);
            plusButton.appendChild(txtPlus);
            this.quantityWrapper.append(minusButton, quantityInput, plusButton);

            const txtStock = document.createElement("p");
            txtStock.setAttribute("class", "cart-txt-stock");
            txtStock.innerHTML = `
                    * 재고 : <span class="cart-num-stock">${this.stock}</span>
                `;
            this.quantityWrapper.appendChild(txtStock);
        }

        return this.quantityWrapper;
    }
}
export default ProductQuantity;
