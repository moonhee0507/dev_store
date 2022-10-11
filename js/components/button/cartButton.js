import { API_URL } from "../../common/constants";

class CartButton {
    constructor(stock, product_id) {
        this.stock = stock;
        this.product_id = product_id;
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-cart");
        this.button.innerText = "장바구니";

        const body = document.querySelector("body");
        const modal = document.querySelector(".modal");
        const buttonClose = document.querySelector(".button-close");
        const buttonNo = document.querySelector(".button-no");
        const buttonYes = document.querySelector(".button-yes");

        this.button.addEventListener("click", () => {
            const product_id = this.product_id.toString();
            let quantity = parseInt(
                document.querySelector(".input-quantity.cart").value
            );
            if (window.localStorage.getItem("token")) {
                if (this.stock === 0) {
                    alert("해당 상품은 재고가 없습니다.");
                } else {
                    addToCartReq();
                }
            } else {
                modal.classList.toggle("show");
                if (modal.classList.contains("show")) {
                    body.style.overflow = "hidden";
                }
            }

            async function addToCartReq() {
                await fetch(`${API_URL}/cart/`, {
                    method: "POST",
                    headers: {
                        Authorization: `JWT ${window.localStorage.getItem(
                            "token"
                        )}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        product_id: product_id,
                        quantity: quantity,
                        check: true,
                    }),
                })
                    .then((res) => {
                        res.ok === true
                            ? window.confirm("장바구니로 이동하시겠습니까?") &&
                              (window.location.href = "/cart")
                            : window.confirm(
                                  "재고 수량이 초과 되었습니다. \n장바구니로 이동하시겠습니까?"
                              ) && (window.location.href = "/cart");
                    })
                    .catch((e) => {
                        console.error(e);
                    });
            }
        });
        modal.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
            }
        });
        buttonClose.addEventListener("click", () => {
            modal.classList.remove("show");
            body.style.overflow = "auto";
        });
        buttonNo.addEventListener("click", () => {
            modal.classList.remove("show");
            body.style.overflow = "auto";
        });
        buttonYes.addEventListener("click", () => {
            window.location.href = "/login";
        });

        return this.button;
    }
}

export default CartButton;
