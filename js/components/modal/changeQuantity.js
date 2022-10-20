import { getProductsDetail, reqCart } from "../../common/api.js";

class ChangeQuantity {
    constructor(item) {
        this.item = item;
        this.modal = document.createElement("div");
    }

    render() {
        this.modal.setAttribute("class", "modal");
        const modalContent = document.createElement("div");
        const buttonClose = document.createElement("button");
        const modalWrapperTxt = document.createElement("div");
        const styleWrapperQtCart = document.createElement("div");
        modalWrapperTxt.setAttribute("class", "modal-wrapper-txt");
        styleWrapperQtCart.setAttribute("class", "style-wrapper-quantity cart");
        const modalWrapperbutton = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        buttonClose.setAttribute("class", "button-close");
        modalWrapperbutton.setAttribute("class", "modal-wrapper-button");

        const buttonNo = document.createElement("button");
        const buttonYes = document.createElement("button");
        buttonNo.setAttribute("type", "button");
        buttonYes.setAttribute("type", "button");
        buttonNo.setAttribute("class", "button-no");
        buttonYes.setAttribute("class", "button-yes");
        buttonNo.innerText = "취소";
        buttonYes.innerText = "수정";

        modalWrapperbutton.append(buttonNo, buttonYes);
        const minusButton = document.createElement("button");
        const quantityInput = document.createElement("input");
        const plusButton = document.createElement("button");

        minusButton.setAttribute("type", "button");
        plusButton.setAttribute("type", "button");
        minusButton.setAttribute("class", "button-quantity minus");
        plusButton.setAttribute("class", "button-quantity plus");
        quantityInput.setAttribute("class", "input-quantity cart");
        quantityInput.setAttribute("value", this.item.quantity);
        quantityInput.setAttribute("type", "number");
        quantityInput.setAttribute("readOnly", "true");

        const txtMinus = document.createElement("span");
        const txtPlus = document.createElement("span");
        txtMinus.setAttribute("class", "sr-only");
        txtPlus.setAttribute("class", "sr-only");
        txtMinus.innerText = "구매 수량 빼기";
        txtPlus.innerText = "구매 수량 더하기";

        styleWrapperQtCart.append(minusButton, quantityInput, plusButton);
        modalWrapperTxt.append(styleWrapperQtCart);

        modalContent.append(buttonClose, modalWrapperTxt, modalWrapperbutton);
        this.modal.appendChild(modalContent);

        const body = document.querySelector("body");
        const cart_item_id = this.item.cart_item_id;
        const product_id = this.item.product_id;
        const is_active = this.item.is_active;
        let quantity = parseInt(quantityInput.value);

        const data = getProductsDetail(product_id);
        const stock = data.stock;
        plusButton.addEventListener("click", () => {
            if (stock === quantity) {
                plusButton.disabled = true;
            } else {
                quantity += 1;
                quantityInput.value = `${quantity}`;
            }
        });
        minusButton.addEventListener("click", () => {
            if (quantity > 1) {
                quantity -= 1;
                quantityInput.value = `${quantity}`;
            }
        });

        buttonYes.addEventListener("click", () => {
            const method = "PUT";
            reqCart(method, product_id, quantity, cart_item_id, is_active)
                .then((res) => res.ok === true && location.reload())
                .catch((e) => console.error(e));
        });

        this.modal.addEventListener("click", (e) => {
            plusButton.disabled = false;
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
                quantityInput.value = this.item.quantity;
                quantity = parseInt(quantityInput.value);
            }
        });

        buttonClose.addEventListener("click", () => {
            plusButton.disabled = false;
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
            quantityInput.value = this.item.quantity;
            quantity = parseInt(quantityInput.value);
        });

        buttonNo.addEventListener("click", () => {
            plusButton.disabled = false;
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
            quantityInput.value = this.item.quantity;
            quantity = parseInt(quantityInput.value);
        });

        return this.modal;
    }
}
export default ChangeQuantity;
