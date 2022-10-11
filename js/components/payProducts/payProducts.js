import OrderListItem from "../orderListItem/orderListItem";

class PayProducts {
    constructor() {
        this.sectionElement = document.createElement("section");
    }

    render() {
        this.sectionElement.classList.add("section-payment-products");

        const h3 = document.createElement("h3");
        h3.setAttribute("class", "sr-only");
        h3.innerText = "주문상품 목록";

        const paymentRow = document.createElement("div");
        paymentRow.setAttribute("class", "payment-row");
        const paymentRowList = document.createElement("ul");
        paymentRowList.setAttribute("class", "payment-row-list");

        const col1 = document.createElement("li");
        col1.innerText = "상품정보";
        const col2 = document.createElement("li");
        col2.innerText = "할인";
        const col3 = document.createElement("li");
        col3.innerText = "배송비";
        const col4 = document.createElement("li");
        col4.innerText = "주문금액";

        const paymentProducts = document.createElement("div");
        paymentProducts.setAttribute("class", "payment-products");

        const orderProduct = document.createElement("div");
        orderProduct.setAttribute("class", "style-wrapper-order-products");

        const wrapperPaymentTotalAmount = document.createElement("div");
        wrapperPaymentTotalAmount.setAttribute(
            "class",
            "wrapper-payment-total-amount"
        );
        const paymentTxtTotalAmount = document.createElement("p");
        paymentTxtTotalAmount.setAttribute("class", "payment-txt-total-amount");
        paymentTxtTotalAmount.innerText = "총 주문금액 ";
        const paymentNumTotalAmount = document.createElement("span");
        paymentNumTotalAmount.setAttribute("class", "payment-num-total-amount");

        const paymentUnitTotalAmount = document.createElement("span");
        paymentUnitTotalAmount.setAttribute(
            "class",
            "payment-unit-total-amount"
        );

        wrapperPaymentTotalAmount.append(
            paymentTxtTotalAmount,
            paymentNumTotalAmount,
            paymentUnitTotalAmount
        );
        paymentRowList.append(col1, col2, col3, col4);
        paymentRow.appendChild(paymentRowList);
        this.sectionElement.append(
            h3,
            paymentRow,
            paymentProducts,
            wrapperPaymentTotalAmount
        );

        if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            const orderData = JSON.parse(localStorage.getItem("fromDetail"));
            const orderListItem = new OrderListItem(orderData);
            orderProduct.append(orderListItem.render());
            paymentProducts.appendChild(orderProduct);

            paymentNumTotalAmount.innerText =
                (
                    parseInt(
                        JSON.parse(window.localStorage.getItem("fromDetail"))
                            .selectedTotal
                    ) +
                    Number(
                        JSON.parse(
                            window.localStorage.getItem("fromDetail")
                        ).shipping.replace(/\D/g, "")
                    )
                ).toLocaleString("ko-KR") + "원";
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            JSON.parse(localStorage.getItem("filteredFromCartItems")).forEach(
                (orderItem) => {
                    const orderListItem = new OrderListItem(orderItem);
                    orderProduct.append(orderListItem.render());
                    paymentProducts.appendChild(orderProduct);
                }
            );

            paymentNumTotalAmount.innerText =
                parseInt(
                    JSON.parse(localStorage.getItem("total")).amount
                ).toLocaleString("ko-KR") + "원";
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            const orderData = JSON.parse(localStorage.getItem("fromCartOne"));
            const orderListItem = new OrderListItem(orderData);
            orderProduct.append(orderListItem.render());
            paymentProducts.appendChild(orderProduct);

            paymentNumTotalAmount.innerText =
                (
                    parseInt(
                        JSON.parse(localStorage.getItem("fromCartOne"))[0]
                            .totalPrice
                    ) +
                    parseInt(
                        JSON.parse(localStorage.getItem("fromCartOne"))[0]
                            .shippingFee
                    )
                ).toLocaleString("ko-KR") + "원";
        }

        return this.sectionElement;
    }
}

export default PayProducts;
