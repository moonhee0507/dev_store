class PayMethod {
    constructor() {
        this.article = document.createElement("article");
    }

    render() {
        this.article.setAttribute("class", "article-payment-method");

        const title = document.createElement("h4");
        title.setAttribute("class", "title-payment-method");
        title.innerText = "결제수단";

        const methodForm = document.createElement("div");
        methodForm.setAttribute("class", "method-wrapper");

        const creditWrapper = document.createElement("div");
        const creditInput = document.createElement("input");
        creditInput.setAttribute("type", "radio");
        creditInput.setAttribute("name", "payment_method");
        creditInput.setAttribute("id", "input-method-card");
        creditInput.setAttribute("value", "CARD");
        creditInput.setAttribute("checked", true);
        const creditLabel = document.createElement("label");
        creditLabel.setAttribute("for", "input-method-card");
        creditLabel.innerText = "신용/체크카드";

        const depositWrapper = document.createElement("div");
        const depositInput = document.createElement("input");
        depositInput.setAttribute("type", "radio");
        depositInput.setAttribute("name", "payment_method");
        depositInput.setAttribute("id", "input-method-deposit");
        depositInput.setAttribute("value", "DEPOSIT");
        const depositLabel = document.createElement("label");
        depositLabel.setAttribute("for", "input-method-deposit");
        depositLabel.innerText = "무통장 입금";

        const phoneWrapper = document.createElement("div");
        const phoneInput = document.createElement("input");
        phoneInput.setAttribute("type", "radio");
        phoneInput.setAttribute("name", "payment_method");
        phoneInput.setAttribute("id", "input-method-phone");
        phoneInput.setAttribute("value", "PHONE_PAYMENT");
        const phoneLabel = document.createElement("label");
        phoneLabel.setAttribute("for", "input-method-phone");
        phoneLabel.innerText = "휴대폰 결제";

        const kakaopayWrapper = document.createElement("div");
        const kakaopayInput = document.createElement("input");
        kakaopayInput.setAttribute("type", "radio");
        kakaopayInput.setAttribute("name", "payment_method");
        kakaopayInput.setAttribute("id", "input-method-kakaopay");
        kakaopayInput.setAttribute("value", "KAKAOPAY");
        const kakaopayLabel = document.createElement("label");
        kakaopayLabel.setAttribute("for", "input-method-kakaopay");
        kakaopayLabel.innerText = "카카오페이";

        const naverpayWrapper = document.createElement("div");
        const naverpayInput = document.createElement("input");
        naverpayInput.setAttribute("type", "radio");
        naverpayInput.setAttribute("name", "payment_method");
        naverpayInput.setAttribute("id", "input-method-naverpay");
        naverpayInput.setAttribute("value", "NAVERPAY");
        const naverpayLabel = document.createElement("label");
        naverpayLabel.setAttribute("for", "input-method-naverpay");
        naverpayLabel.innerText = "네이버페이";

        creditWrapper.append(creditInput, creditLabel);
        depositWrapper.append(depositInput, depositLabel);
        phoneWrapper.append(phoneInput, phoneLabel);
        kakaopayWrapper.append(kakaopayInput, kakaopayLabel);
        naverpayWrapper.append(naverpayInput, naverpayLabel);
        methodForm.append(
            creditWrapper,
            depositWrapper,
            phoneWrapper,
            kakaopayWrapper,
            naverpayWrapper
        );
        this.article.append(title, methodForm);

        return this.article;
    }
}

export default PayMethod;
