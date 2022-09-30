class ProductShippingMethod {
    constructor(shippingMethod, shippingFee) {
        this.shippingMethod = shippingMethod;
        this.shippingFee = shippingFee;
    }

    render() {
        const url = window.location.pathname;
        const li = document.createElement("li");
        const txtMethod = document.createElement("span");
        const txtFee = document.createElement("span");

        const paymentTxtShipping = document.createElement("p");
        paymentTxtShipping.setAttribute("class", "payment-txt-shipping");
        const paymentNumShipping = document.createElement("span");
        paymentNumShipping.setAttribute("class", "payment-num-shipping");

        if (url === "/" || url.includes("/store/")) {
            const p = document.createElement("p");
            p.setAttribute("class", "card-container-shipping-method");
            const span = document.createElement("span");
            span.setAttribute("class", "card-container-shipping-fee");
            span.innerText = this.shippingFee
                ? this.shippingFee.toLocaleString("ko-FR") + "원"
                : "무료";
            p.append("배송비 ", span);

            return p;
        } else if (url.includes("/products/")) {
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
        } else if (url === "/cart") {
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
            url === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            paymentNumShipping.innerText = JSON.parse(
                window.localStorage.getItem("fromDetail")
            ).shipping;

            paymentTxtShipping.appendChild(paymentNumShipping);

            return paymentTxtShipping;
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            paymentNumShipping.innerText =
                parseInt(this.shippingFee).toLocaleString("ko-KR") + "원";
            paymentTxtShipping.appendChild(paymentNumShipping);

            return paymentTxtShipping;
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            paymentNumShipping.innerText =
                parseInt(
                    JSON.parse(window.localStorage.getItem("fromCartOne"))[0]
                        .shippingFee
                ).toLocaleString("ko-KR") + "원";

            paymentTxtShipping.appendChild(paymentNumShipping);

            return paymentTxtShipping;
        } else if (url.includes("/search")) {
            const p = document.createElement("p");
            const span = document.createElement("span");
            span.innerText = this.shippingFee
                ? this.shippingFee.toLocaleString("ko-FR") + "원"
                : "무료";
            p.append("배송비 ", span);

            let isGrid = window.localStorage.getItem("grid") ? true : false;
            if (isGrid) {
                p.setAttribute("class", "card-container-shipping-method");
                span.setAttribute("class", "card-container-shipping-fee");
            } else {
                p.setAttribute("class", "search-shipping");
                span.setAttribute("class", "search-shipping-fee");
            }

            return p;
        }
    }
}

export default ProductShippingMethod;
