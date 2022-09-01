import { API_URL } from "../../common/constants";

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
        let qt = parseInt(quantityInput.value);

        // 해당 상품 재고 확인
        checkStock();
        async function checkStock() {
            const res = await fetch(`${API_URL}/products/${product_id}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            const stock = data.stock;

            // + 버튼을 누르면 숫자 1 추가
            plusButton.addEventListener("click", () => {
                if (stock === qt) {
                    plusButton.disabled = true;
                    plusButton.style.cursor = "default";
                } else {
                    qt += 1;
                    quantityInput.value = `${qt}`;
                }
            });
            // - 버튼을 누르면 숫자 1 차감
            minusButton.addEventListener("click", () => {
                if (qt > 1) {
                    qt -= 1;
                    quantityInput.value = `${qt}`;
                }
            });
        }

        // 수정 버튼 누르면 존재하는 자원 변경 요청(PUT)
        buttonYes.addEventListener("click", () => {
            sendQuantityData();
        });

        async function sendQuantityData() {
            await fetch(`${API_URL}/cart/${cart_item_id}/`, {
                method: "PUT",
                headers: {
                    Authorization: `JWT ${window.localStorage.getItem(
                        "token"
                    )}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product_id: product_id,
                    quantity: qt,
                    is_active: is_active,
                }),
            })
                .then((res) => res.ok === true && location.reload())
                .catch((e) => console.error(e));
        }

        // 바깥부분 클릭하면 모달창이 없어지는 기능
        this.modal.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
                quantityInput.value = this.item.quantity;
                qt = parseInt(quantityInput.value);
            }
        });
        // x 버튼 클릭하면 모달창이 없어지는 기능
        buttonClose.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
            quantityInput.value = this.item.quantity;
            qt = parseInt(quantityInput.value);
        });
        // 취소 버튼 누르면 모달창이 없어지는 기능
        buttonNo.addEventListener("click", () => {
            this.modal.classList.remove("show");
            body.style.overflow = "auto";
            quantityInput.value = this.item.quantity;
            qt = parseInt(quantityInput.value);
        });

        return this.modal;
    }
}
export default ChangeQuantity;
