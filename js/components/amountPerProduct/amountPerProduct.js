class AmountPerProduct {
    constructor(totalPrice) {
        this.totalPrice = totalPrice;
        this.paymentTxtAmount = document.createElement("p");
    }
    render() {
        this.paymentTxtAmount.setAttribute("class", "payment-txt-amount");
        const paymentNumAmount = document.createElement("span");
        paymentNumAmount.setAttribute("class", "payment-num-amount");

        if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            paymentNumAmount.innerText =
                Number(
                    JSON.parse(window.localStorage.getItem("fromDetail"))
                        .selectedTotal
                ).toLocaleString("ko-KR") + "원";
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            paymentNumAmount.innerText =
                parseInt(this.totalPrice).toLocaleString("ko-KR") + "원";
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
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
