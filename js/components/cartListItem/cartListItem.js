import { API_URL } from "../../common/constants.js";
import BuyNowButton from "../button/buyNowButton.js";
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
        console.log(this.cartItem);
    }
    // 상세내용 세팅하기
    async setCart() {
        await this.getProductData();

        this.wrapper.setAttribute("class", "wrapper-cart-product");

        // x 버튼
        const closeButton = document.createElement("button");
        closeButton.setAttribute("class", "button-close-cart");

        // 체크박스 열
        const checkButton = document.createElement("button");
        checkButton.setAttribute("class", "button-cart-check");

        // 상품정보 열
        const productInfoCard = new ProductInfoCard(this.cartItem);

        // 수량 열
        const productQuantity = new ProductQuantity(this.cartItem);

        // 상품금액 열
        const productTotal = new ProductTotal(this.cartItem.price);

        this.wrapper.appendChild(closeButton);
        this.wrapper.appendChild(checkButton);
        this.wrapper.appendChild(productInfoCard.render());
        this.wrapper.appendChild(productQuantity.render());
        this.wrapper.appendChild(productTotal.render());
    }

    render() {
        this.setCart();

        return this.wrapper;
    }
}
export default CartListItem;
