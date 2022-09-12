class ProductShippingMethod {
    constructor(shippingMethod, shippingFee) {
        this.shippingMethod = shippingMethod;
        this.shippingFee = shippingFee;
    }

    render() {
        const li = document.createElement("li");
        const txtMethod = document.createElement("span");
        const txtFee = document.createElement("span");

        const paymentTxtShipping = document.createElement("p");
        paymentTxtShipping.setAttribute("class", "payment-txt-shipping");
        const paymentNumShipping = document.createElement("span");
        paymentNumShipping.setAttribute("class", "payment-num-shipping");

        // 상품 상세페이지
        if (window.location.pathname.includes("/products/")) {
            txtMethod.setAttribute("class", "detail-shipping-method");
            txtFee.setAttribute("class", "detail-shipping-fee");

            if (this.shippingMethod === "DELIVERY") {
                txtMethod.innerText = "직접배송" + " / ";
            } else if (this.shippingMethod === "PARCEL") {
                txtMethod.innerText = "택배배송" + " / ";
            }

            if (!this.shippingFee) {
                txtFee.innerText = "무료배송";
            } else {
                txtFee.innerText =
                    this.shippingFee.toLocaleString("ko-KR") + "원";
            }

            li.append(txtMethod, txtFee);

            return li;

            // 장바구니 페이지
        } else if (window.location.pathname === "/cart") {
            txtMethod.setAttribute("class", "cart-shipping-method");
            txtFee.setAttribute("class", "cart-shipping-fee");

            if (this.shippingMethod === "DELIVERY") {
                txtMethod.innerText = "직접배송" + " / ";
            } else if (this.shippingMethod === "PARCEL") {
                txtMethod.innerText = "택배배송" + " / ";
            }

            if (!this.shippingFee) {
                txtFee.innerText = "무료배송";
            } else {
                txtFee.innerText =
                    this.shippingFee.toLocaleString("ko-KR") + "원";
            }

            li.append(txtMethod, txtFee);

            return li;

            // 상품 상세(path1)에서 유입
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            paymentNumShipping.innerText = JSON.parse(
                window.localStorage.getItem("fromDetail")
            ).shipping;

            paymentTxtShipping.appendChild(paymentNumShipping);

            return paymentTxtShipping;
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            paymentNumShipping.innerText =
                parseInt(this.shippingFee).toLocaleString("ko-KR") + "원";
            paymentTxtShipping.appendChild(paymentNumShipping);

            return paymentTxtShipping;
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            paymentNumShipping.innerText =
                parseInt(
                    JSON.parse(window.localStorage.getItem("fromCartOne"))[0]
                        .shippingFee
                ).toLocaleString("ko-KR") + "원";

            paymentTxtShipping.appendChild(paymentNumShipping);

            return paymentTxtShipping;
        } else if (window.location.pathname.includes("/search")) {
            const p = document.createElement("p");
            p.setAttribute("class", "search-shipping");

            const span = document.createElement("span");
            span.setAttribute("class", "search-shipping-fee");

            span.innerText = this.shippingFee
                ? this.shippingFee.toLocaleString("ko-FR") + "원"
                : "무료";

            p.append("배송비 ", span);

            return p;
        }
    }
}

export default ProductShippingMethod;
