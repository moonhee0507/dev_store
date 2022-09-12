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

            // 로그인이 안되어 있으면 로그인 안내 모달 띄우기
            if (window.localStorage.getItem("token")) {
                if (this.stock === 0) {
                    alert("해당 상품은 재고가 없습니다.");
                } else {
                    // 장바구니에 물건 넣기(POST)
                    addToCartReq();
                }
            } else {
                // 로그인 안내 모달 띄우기
                modal.classList.toggle("show");

                // 모달 class가 show면 body의 overflow hidden처리
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

        // 바깥부분 클릭하면 모달창이 없어지는 기능
        modal.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("show")) {
                target.classList.remove("show");
                body.style.overflow = "auto";
            }
        });

        // x 버튼 클릭하면 모달창이 없어지는 기능
        buttonClose.addEventListener("click", () => {
            modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        // 아니오 버튼 누르면 모달창이 없어지는 기능
        buttonNo.addEventListener("click", () => {
            modal.classList.remove("show");
            body.style.overflow = "auto";
        });

        // 예 버튼을 누르면 로그인 페이지로 이동하는 기능
        buttonYes.addEventListener("click", () => {
            window.location.href = "/login";
        });

        return this.button;
    }
}

export default CartButton;
