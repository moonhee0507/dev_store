import { ProductShipping } from "../product/index.js";
import { ProductInfoCard } from "../productInfoCard/index.js";

class OrderListItem {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        const wrapperPaymentProduct = document.createElement("div");
        wrapperPaymentProduct.setAttribute("class", "wrapper-payment-product");

        // 상품정보 열
        const paymentProductInfoCol = document.createElement("div");
        paymentProductInfoCol.setAttribute("class", "payment-product-info-col");
        const productInfoCard = new ProductInfoCard();
        paymentProductInfoCol.appendChild(productInfoCard.render());

        // 할인 열
        const paymentDiscountCol = document.createElement("div");
        paymentDiscountCol.setAttribute("class", "payment-discount-col");
        paymentDiscountCol.innerHTML = `
            <p class="payment-txt-discount">-</p>
        `;

        // 배송비 열
        const paymentShippingCol = document.createElement("div");
        paymentShippingCol.setAttribute("class", "payment-shipping-col");
        const productShipping = new ProductShipping();
        paymentShippingCol.appendChild(productShipping.render());

        // 주문금액 열
        const paymentOrderAmountCol = document.createElement("div");
        paymentOrderAmountCol.setAttribute("class", "payment-order-amount-col");
        const paymentTxtAmount = document.createElement("p");
        paymentTxtAmount.setAttribute("class", "payment-txt-amount");
        const paymentNumAmount = document.createElement("span");
        paymentNumAmount.setAttribute("class", "payment-num-amount");
        paymentNumAmount.innerText =
            Number(
                JSON.parse(window.localStorage.getItem("fromDetail"))
                    .selectedTotal
            ).toLocaleString("ko-KR") + "원";

        console.log();
        paymentTxtAmount.appendChild(paymentNumAmount);
        paymentOrderAmountCol.appendChild(paymentTxtAmount);

        wrapperPaymentProduct.append(
            paymentProductInfoCol,
            paymentDiscountCol,
            paymentShippingCol,
            paymentOrderAmountCol
        );
        this.wrapper.appendChild(wrapperPaymentProduct);

        return this.wrapper;
    }
}

export default OrderListItem;
