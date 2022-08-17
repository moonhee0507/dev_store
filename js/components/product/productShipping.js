class ProductShippingMethod {
    constructor(shippingMethod, shippingFee) {
        this.shippingMethod = shippingMethod;
        this.shippingFee = shippingFee;
    }

    render() {
        const li = document.createElement("li");
        const txtMethod = document.createElement("span");
        const txtFee = document.createElement("span");

        txtMethod.setAttribute("class", "detail-shipping-method");
        txtFee.setAttribute("class", "detail-shipping-fee");

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

        return li;
    }
}

export default ProductShippingMethod;
