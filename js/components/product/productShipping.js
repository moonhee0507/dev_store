class ProductShippingMethod {
    constructor(shippingMethod, shippingFee) {
        this.shippingMethod = shippingMethod;
        this.shippingFee = shippingFee;
    }

    render() {
        const li = document.createElement("li");
        const txtMethod = document.createElement("span");
        const txtFee = document.createElement("span");

        if (this.shippingMethod === "DELIVERY") {
            txtMethod.innerText = "택배배송" + " / ";
        } else if (this.shippingMethod === "PARCEL") {
            txtMethod.innerText = "등기통상" + " / ";
        }

        if (!this.shippingFee) {
            txtFee.innerText = "무료배송";
        } else {
            txtFee.innerText = this.shippingFee.toLocaleString("ko-KR") + "원";
        }

        li.append(txtMethod, txtFee);

        // 상품 상세페이지
        if (window.location.pathname.includes("/products/")) {
            txtMethod.setAttribute("class", "detail-shipping-method");
            txtFee.setAttribute("class", "detail-shipping-fee");
            // 장바구니 페이지
        } else if (window.location.pathname === "/cart") {
            txtMethod.setAttribute("class", "cart-shipping-method");
            txtFee.setAttribute("class", "cart-shipping-fee");
        }

        return li;
    }
}

export default ProductShippingMethod;
