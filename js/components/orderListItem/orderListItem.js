import { API_URL } from "../../common/constants.js";
import { ProductInfoCard } from "../productInfoCard/index.js";

class OrderListItem {
    constructor(item) {
        this.item = item;
        this.wrapper = document.createElement("div");
        this.detail = {};
    }

    // 주문 상품 상세정보 가져오기
    async getProductData() {
        const res = await fetch(
            `${API_URL}/products/${this.item.order_items}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();

        this.detail = await data;
    }

    // 주문상품 세팅하기
    async setOrder() {
        await this.getProductData();

        const wrapperPaymentProduct = document.createElement("div");
        wrapperPaymentProduct.setAttribute("class", "wrapper-payment-product");

        // 상품정보 열
        const paymentProductInfoCol = document.createElement("div");
        paymentProductInfoCol.setAttribute("class", "payment-product-info-col");
        const productInfoCard = new ProductInfoCard(
            this.detail,
            this.item.order_quantity
        );
        paymentProductInfoCol.appendChild(productInfoCard.render());

        // 할인 열
        const paymentDiscountCol = document.createElement("div");
        paymentDiscountCol.setAttribute("class", "payment-discount-col");

        // 배송비 열
        const paymentShippingCol = document.createElement("div");
        paymentShippingCol.setAttribute("class", "payment-shipping-col");

        // 주문금액 열
        const paymentOrderAmountCol = document.createElement("div");
        paymentOrderAmountCol.setAttribute("class", "payment-order-amount-col");

        wrapperPaymentProduct.append(
            paymentProductInfoCol,
            paymentDiscountCol,
            paymentShippingCol,
            paymentOrderAmountCol
        );
        this.wrapper.appendChild(wrapperPaymentProduct);
    }

    render() {
        this.setOrder();

        return this.wrapper;
    }
}

export default OrderListItem;
