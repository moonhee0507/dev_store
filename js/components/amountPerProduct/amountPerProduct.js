class AmountPerProduct {
    constructor(totalPrice) {
        this.totalPrice = totalPrice; // path2
        this.paymentTxtAmount = document.createElement("p");
        console.log(this);
    }
    render() {
        this.paymentTxtAmount.setAttribute("class", "payment-txt-amount");
        const paymentNumAmount = document.createElement("span");
        paymentNumAmount.setAttribute("class", "payment-num-amount");

        // 상품 상세(path1)에서 유입
        if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            // 주문금액
            paymentNumAmount.innerText =
                Number(
                    JSON.parse(window.localStorage.getItem("fromDetail"))
                        .selectedTotal
                ).toLocaleString("ko-KR") + "원";
            // 상품 상세(path2)에서 유입
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            // 주문금액
            paymentNumAmount.innerText =
                parseInt(this.totalPrice).toLocaleString("ko-KR") + "원";
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            // 주문금액
            paymentNumAmount.innerText =
                parseInt(
                    JSON.parse(localStorage.getItem("fromCartOne"))[0]
                        .totalPrice
                ).toLocaleString("ko-KR") + "원";
        }

        this.paymentTxtAmount.appendChild(paymentNumAmount);
        return this.paymentTxtAmount;
    }
}

export default AmountPerProduct;
