import { API_URL } from "../../common/constants";
import OrderListItem from "../orderListItem/orderListItem";

class PayProducts {
    constructor() {
        this.sectionElement = document.createElement("section");
        this.order = {};
    }

    // 주문 목록 가져오기
    async getOrderData() {
        const res = await fetch(`${API_URL}/order/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        this.order = await data;
        console.log(this.order);
    }

    // 주문 목록 세팅하기
    async setOrderData() {
        await this.getOrderData();
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

        this.order.results.forEach((item) => {
            const orderProduct = document.createElement("div");
            const orderListItem = new OrderListItem(item);
            orderProduct.append(orderListItem.render());
            paymentProducts.appendChild(orderProduct);
        });

        paymentRowList.append(col1, col2, col3, col4);
        paymentRow.appendChild(paymentRowList);
        this.sectionElement.append(
            h3,
            paymentRow,
            paymentProducts
            // wrapperPaymentTotalAmount
        );
    }
    render() {
        this.setOrderData();

        return this.sectionElement;
    }
}

export default PayProducts;
