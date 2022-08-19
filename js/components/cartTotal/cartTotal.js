class CartTotal {
    constructor() {
        this.sectionElement = document.createElement("section");
    }

    render() {
        this.sectionElement.setAttribute("class", "wrapper-cart-total");
        const totalCol1 = document.createElement("div");
        totalCol1.setAttribute("class", "total-col1");
        const txtCartSum = document.createElement("p");
        txtCartSum.setAttribute("class", "txt-cart-sum");
        txtCartSum.innerText = "총 상품금액";
        const numCartSum = document.createElement("p");
        numCartSum.setAttribute("class", "num-cart-sum");
        numCartSum.innerText = "46500";
        const cartTotalUnit1 = document.createElement("span");
        cartTotalUnit1.innerText = "원";
        cartTotalUnit1.setAttribute("class", "cart-total-unit");
        numCartSum.appendChild(cartTotalUnit1);

        totalCol1.append(txtCartSum, numCartSum);

        const totalCol2 = document.createElement("div");
        totalCol2.setAttribute("class", "total-col2");
        const txtCartMinus = document.createElement("p");
        txtCartMinus.setAttribute("class", "txt-cart-minus");
        txtCartMinus.innerText = "상품 할인";
        const numCartMinus = document.createElement("p");
        numCartMinus.setAttribute("class", "num-cart-minus");
        numCartMinus.innerText = "0";
        const cartTotalUnit2 = document.createElement("span");
        cartTotalUnit2.innerText = "원";
        cartTotalUnit2.setAttribute("class", "cart-total-unit");
        numCartMinus.appendChild(cartTotalUnit2);

        totalCol2.append(txtCartMinus, numCartMinus);

        const totalCol3 = document.createElement("div");
        totalCol3.setAttribute("class", "total-col3");
        const txtCartSumShipping = document.createElement("p");
        txtCartSumShipping.setAttribute("class", "txt-cart-sum-shipping");
        txtCartSumShipping.innerText = "배송비";
        const numCartSumShipping = document.createElement("p");
        numCartSumShipping.setAttribute("class", "num-cart-sum-shipping");
        numCartSumShipping.innerText = "0";
        const cartTotalUnit3 = document.createElement("span");
        cartTotalUnit3.innerText = "원";
        cartTotalUnit3.setAttribute("class", "cart-total-unit");
        numCartSumShipping.appendChild(cartTotalUnit3);

        totalCol3.append(txtCartSumShipping, numCartSumShipping);

        const totalCol4 = document.createElement("div");
        totalCol4.setAttribute("class", "total-col4");
        const expectedPaymentAmount = document.createElement("p");
        expectedPaymentAmount.setAttribute("class", "expected-payment-amount");
        expectedPaymentAmount.innerText = "결제 예정 금액";
        const strong = document.createElement("strong");
        strong.setAttribute("class", "num-amount");
        strong.innerText = "46500";
        const txtAmountUnit = document.createElement("span");
        txtAmountUnit.setAttribute("class", "txt-amount-unit");
        txtAmountUnit.innerText = "원";
        strong.appendChild(txtAmountUnit);

        totalCol4.append(expectedPaymentAmount, strong);

        this.sectionElement.append(totalCol1, totalCol2, totalCol3, totalCol4);
        return this.sectionElement;
    }
}
export default CartTotal;
