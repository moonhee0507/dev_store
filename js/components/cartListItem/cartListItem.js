import { API_URL } from "../../common/constants.js";
import DeleteCartItem from "../modal/deleteCartItem";
import { ProductQuantity, ProductTotal } from "../product/index.js";
import { ProductInfoCard } from "../productInfoCard/index.js";

class CartListItem {
    constructor(item) {
        this.item = item;
        this.wrapper = document.createElement("div");
        this.cartItem = {};
    }

    // 장바구니 상품 상세 정보 가져오기
    async getProductData() {
        const res = await fetch(`${API_URL}/products/${this.item.product_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        this.cartItem = await data;
    }
    // 상세내용 세팅하기
    async setCart() {
        await this.getProductData();

        this.wrapper.setAttribute(
            "class",
            this.cartItem.stock === 0
                ? "wrapper-cart-product soldout"
                : "wrapper-cart-product"
        );

        // x 버튼
        const closeButton = document.createElement("button");
        closeButton.setAttribute("class", "button-close-cart");

        // 체크박스 열
        const checkButton = document.createElement("button");
        checkButton.setAttribute("class", "button-cart-check fill");

        // 상품정보 열
        const productInfoCard = new ProductInfoCard(this.cartItem);

        // 수량 열
        const productQuantity = new ProductQuantity(
            this.cartItem.stock,
            this.cartItem.price,
            this.item.quantity,
            this.item.cart_item_id,
            this.item.is_active,
            this.item.product_id
        );

        // 상품금액 열
        const productTotal = new ProductTotal(
            this.cartItem.stock,
            this.cartItem.price,
            this.item.quantity
        );

        this.wrapper.appendChild(closeButton);
        this.wrapper.appendChild(checkButton);
        this.wrapper.appendChild(productInfoCard.render());
        this.wrapper.appendChild(productQuantity.render());
        this.wrapper.appendChild(productTotal.render());

        // 체크박스 클릭 시 토글
        checkButton.addEventListener("click", () => {
            checkButton.classList.toggle("fill");
        });

        const allCheckBox = document.querySelectorAll(".button-cart-check");
        let itemAllCheck = false;

        // 제목 체크박스가 클릭될 때마다 나머지 체크박스 반영
        for (let i = 0; i < allCheckBox.length; i++) {
            allCheckBox[0].addEventListener("click", () => {
                // 제목행 체크되어 있으면 나머지도 체크
                if (allCheckBox[0].className.includes("fill")) {
                    this.cartItem.stock !== 0 &&
                        allCheckBox[i].classList.add("fill");
                    itemAllCheck = true;
                } else {
                    allCheckBox[1].classList.remove("fill");
                    allCheckBox[i] && allCheckBox[i].classList.remove("fill");
                    itemAllCheck = false;
                }
            });

            // 모두 체크되어 있는 상태에서 하나 해제하면 제목행 체크 해제
            allCheckBox[i].addEventListener("click", () => {
                // NodeList 배열화
                const arrAllCheckBox = Array.from(allCheckBox);
                // 클래스명 배열 변수화
                const arrClassNameAllCheckBox = arrAllCheckBox.map(
                    (item) => item.className
                );
                // 배열 맨앞 요소 제거
                arrClassNameAllCheckBox.shift();

                let everyElHasFill = arrClassNameAllCheckBox.every((el) => {
                    return el.includes("fill");
                });

                if (itemAllCheck) {
                    !allCheckBox[i].className.includes("fill") &&
                        allCheckBox[0].classList.remove("fill");
                    itemAllCheck = false;
                } else {
                    everyElHasFill
                        ? allCheckBox[0].classList.add("fill")
                        : allCheckBox[0].classList.remove("fill");
                }
            });
        }

        // 장바구니 삭제
        const deleteCartItem = new DeleteCartItem(this.item.cart_item_id);
        const deleteModalGroup = document.querySelector(".delete-modal-group");
        deleteModalGroup.appendChild(deleteCartItem.render());

        // this.cartItem.stock === 0이면 체크박스 해제
        if (this.cartItem.stock === 0) {
            checkButton.setAttribute("class", "button-cart-check");
            checkButton.style.cursor = "default";
            checkButton.disabled = true;
        }
    }

    render() {
        this.setCart();

        return this.wrapper;
    }
}
export default CartListItem;
