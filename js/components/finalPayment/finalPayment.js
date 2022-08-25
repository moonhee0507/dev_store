class FinalPayment {
    constructor() {
        this.article = document.createElement("article");
    }

    render() {
        this.article.setAttribute("class", "article-final-payment");
        const title = document.createElement("h4");
        title.setAttribute("class", "title-final-payment");
        title.innerText = "최종결제 정보";

        const styleWrapperFinal = document.createElement("div");
        styleWrapperFinal.setAttribute("class", "style-wrapper-final");
        const styleWrapperGray = document.createElement("div");
        styleWrapperGray.setAttribute("class", "style-wrapper-gray");

        const finalCalcElement = document.createElement("ul");
        finalCalcElement.setAttribute("class", "final-calc-element");
        const finalCalcResult = document.createElement("ul");
        finalCalcResult.setAttribute("class", "final-calc-result");

        // 상품금액
        const list1 = document.createElement("li");
        const txtFinalPrice = document.createElement("p");
        txtFinalPrice.setAttribute("class", "txt-final-price");
        txtFinalPrice.innerText = "- 상품금액";
        const numFinalPrice = document.createElement("p");
        numFinalPrice.setAttribute("class", "num-final-price");
        const txtFinalUnit1 = document.createElement("span");
        txtFinalUnit1.setAttribute("class", "txt-final-unit");
        txtFinalUnit1.innerText = "원";

        // 할인금액
        const list2 = document.createElement("li");
        const txtFinalDiscount = document.createElement("p");
        txtFinalDiscount.setAttribute("class", "txt-final-discount");
        txtFinalDiscount.innerText = "- 할인금액";
        const numFinalDiscount = document.createElement("p");
        numFinalDiscount.setAttribute("class", "num-final-discount");
        const txtFinalUnit2 = document.createElement("span");
        txtFinalUnit2.setAttribute("class", "txt-final-unit");
        txtFinalUnit2.innerText = "원";

        // 배송비
        const list3 = document.createElement("li");
        const txtFinalShipping = document.createElement("p");
        txtFinalShipping.setAttribute("class", "txt-final-shipping");
        txtFinalShipping.innerText = "- 배송비";
        const numFinalShipping = document.createElement("p");
        numFinalShipping.setAttribute("class", "num-final-shipping");
        numFinalShipping.innerText = Number(
            JSON.parse(
                window.localStorage.getItem("fromDetail")
            ).shipping.replace(/\D/g, "")
        ).toLocaleString("ko-KR");
        const txtFinalUnit3 = document.createElement("span");
        txtFinalUnit3.setAttribute("class", "txt-final-unit");
        txtFinalUnit3.innerText = "원";

        // 결제금액
        const listResult = document.createElement("li");
        const txtFinalPayment = document.createElement("p");
        txtFinalPayment.setAttribute("class", "txt-final-payment");
        txtFinalPayment.innerText = "- 결제금액";
        const numFinalPayment = document.createElement("p");
        numFinalPayment.setAttribute("class", "num-final-payment");
        numFinalPayment.innerText = (
            parseInt(
                JSON.parse(window.localStorage.getItem("fromDetail"))
                    .selectedTotal
            ) +
            Number(
                JSON.parse(
                    window.localStorage.getItem("fromDetail")
                ).shipping.replace(/\D/g, "")
            )
        ).toLocaleString("ko-KR");
        const txtFinalPaymentUnit = document.createElement("span");
        txtFinalPaymentUnit.setAttribute("class", "txt-final-payment-unit");
        txtFinalPaymentUnit.innerText = "원";
        numFinalPayment.appendChild(txtFinalPaymentUnit);
        listResult.append(txtFinalPayment, numFinalPayment);

        // 체크박스
        const styleWrapperFinalAgree = document.createElement("span");
        styleWrapperFinalAgree.setAttribute(
            "class",
            "style-wrapper-final-agree"
        );
        const buttonPayment = document.createElement("button");
        buttonPayment.setAttribute("class", "button-payment");
        buttonPayment.innerText = "결제하기";

        const checkFinalAgree = document.createElement("input");
        checkFinalAgree.setAttribute("type", "checkbox");
        checkFinalAgree.setAttribute("id", "check-final-agree");
        const checkFinalLabel = document.createElement("label");
        checkFinalLabel.setAttribute("for", "check-final-agree");
        checkFinalLabel.innerText =
            "주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.";

        styleWrapperFinalAgree.append(checkFinalAgree, checkFinalLabel);
        styleWrapperGray.append(styleWrapperFinalAgree, buttonPayment);

        numFinalPrice.append(
            parseInt(
                JSON.parse(window.localStorage.getItem("fromDetail"))
                    .selectedTotal
            ).toLocaleString("ko-KR"),
            txtFinalUnit1
        );
        numFinalDiscount.append("0", txtFinalUnit2);
        numFinalShipping.appendChild(txtFinalUnit3);
        list1.append(txtFinalPrice, numFinalPrice);
        list2.append(txtFinalDiscount, numFinalDiscount);
        list3.append(txtFinalShipping, numFinalShipping);
        finalCalcElement.append(list1, list2, list3);
        finalCalcResult.append(listResult);
        styleWrapperFinal.append(finalCalcElement, finalCalcResult);
        this.article.append(title, styleWrapperFinal, styleWrapperGray);
        return this.article;
    }
}

export default FinalPayment;
