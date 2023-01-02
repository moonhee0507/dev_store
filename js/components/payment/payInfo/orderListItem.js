import { ProductShipping } from "../../common/product/index.js";
import { ProductInfoCard } from "../../common/productInfoCard/index.js";
import AmountPerProduct from "../../common/amountPerProduct/amountPerProduct.js";

class OrderListItem {
    constructor(orderItem) {
        this.orderItem = orderItem;
        this.wrapper = document.createElement("div");
    }

    render() {
        const wrapperPaymentProduct = document.createElement("div");
        wrapperPaymentProduct.setAttribute("class", "wrapper-payment-product");

        const paymentProductInfoCol = document.createElement("div");
        paymentProductInfoCol.setAttribute("class", "payment-product-info-col");
        const productInfoCard = new ProductInfoCard(this.orderItem);
        paymentProductInfoCol.appendChild(productInfoCard.render());

        const paymentDiscountCol = document.createElement("div");
        paymentDiscountCol.setAttribute("class", "payment-discount-col");
        paymentDiscountCol.innerHTML = `
            <p class="payment-txt-discount">-</p>
        `;

        const paymentShippingCol = document.createElement("div");
        paymentShippingCol.setAttribute("class", "payment-shipping-col");
        const productShipping = new ProductShipping(
            this.orderItem.shippingMethod,
            this.orderItem.shippingFee
        );
        paymentShippingCol.appendChild(productShipping.render());

        const paymentOrderAmountCol = document.createElement("div");
        paymentOrderAmountCol.setAttribute("class", "payment-order-amount-col");
        const amountPerProduct = new AmountPerProduct(
            this.orderItem.totalPrice
        );

        paymentOrderAmountCol.appendChild(amountPerProduct.render());

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
