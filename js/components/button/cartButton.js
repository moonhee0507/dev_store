import { reqCart } from "../../common/api.js";

class CartButton {
    constructor(stock, product_id) {
        this.stock = stock;
        this.product_id = product_id;
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-cart");
        this.button.innerText = "μ₯λ°κ΅¬λ";

        const body = document.querySelector("body");
        const modal = document.querySelector(".modal");
        const buttonClose = document.querySelector(".button-close");
        const buttonNo = document.querySelector(".button-no");
        const buttonYes = document.querySelector(".button-yes");

        this.button.addEventListener("click", () => {
            const method = "POST";
            const product_id = this.product_id;
            let quantity = parseInt(
                document.querySelector(".input-quantity.cart").value
            );
            const isSeller =
                window.localStorage.getItem("loginType") === "SELLER"
                    ? true
                    : false;
            if (isSeller) {
                alert("π« νλ§€μλ μ¬μ©ν  μ μλ μλΉμ€μλλ€.");
            } else if (window.localStorage.getItem("token")) {
                if (this.stock === 0) {
                    alert("ν΄λΉ μνμ μ¬κ³ κ° μμ΅λλ€.");
                } else {
                    reqCart(method, product_id, quantity, false, false)
                        .then((res) => {
                            res.ok === true
                                ? window.confirm(
                                      "μ₯λ°κ΅¬λλ‘ μ΄λνμκ² μ΅λκΉ?"
                                  ) && (window.location.href = "/cart")
                                : window.confirm(
                                      "μ¬κ³  μλμ΄ μ΄κ³Ό λμμ΅λλ€. \nμ₯λ°κ΅¬λλ‘ μ΄λνμκ² μ΅λκΉ?"
                                  ) && (window.location.href = "/cart");
                        })
                        .catch((e) => {
                            console.error(e);
                        });
                }
            } else {
                modal.classList.toggle("show");
                if (modal.classList.contains("show")) {
                    body.style.overflow = "hidden";
                }
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
