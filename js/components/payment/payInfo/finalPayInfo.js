import { API_URL } from "../../../common/constants.js";

class FinalPayInfo {
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

        const list1 = document.createElement("li");
        const txtFinalPrice = document.createElement("p");
        txtFinalPrice.setAttribute("class", "txt-final-price");
        txtFinalPrice.innerText = "- 상품금액";
        const numFinalPrice = document.createElement("p");
        numFinalPrice.setAttribute("class", "num-final-price");
        const txtFinalUnit1 = document.createElement("span");
        txtFinalUnit1.setAttribute("class", "txt-final-unit");
        txtFinalUnit1.innerText = "원";

        const list2 = document.createElement("li");
        const txtFinalDiscount = document.createElement("p");
        txtFinalDiscount.setAttribute("class", "txt-final-discount");
        txtFinalDiscount.innerText = "- 할인금액";
        const numFinalDiscount = document.createElement("p");
        numFinalDiscount.setAttribute("class", "num-final-discount");
        const txtFinalUnit2 = document.createElement("span");
        txtFinalUnit2.setAttribute("class", "txt-final-unit");
        txtFinalUnit2.innerText = "원";

        const list3 = document.createElement("li");
        const txtFinalShipping = document.createElement("p");
        txtFinalShipping.setAttribute("class", "txt-final-shipping");
        txtFinalShipping.innerText = "- 배송비";
        const numFinalShipping = document.createElement("p");
        numFinalShipping.setAttribute("class", "num-final-shipping");
        const txtFinalUnit3 = document.createElement("span");
        txtFinalUnit3.setAttribute("class", "txt-final-unit");
        txtFinalUnit3.innerText = "원";

        const listResult = document.createElement("li");
        const txtFinalPayment = document.createElement("p");
        txtFinalPayment.setAttribute("class", "txt-final-payment");
        txtFinalPayment.innerText = "- 결제금액";
        const numFinalPayment = document.createElement("p");
        numFinalPayment.setAttribute("class", "num-final-payment");
        const txtFinalPaymentUnit = document.createElement("span");
        txtFinalPaymentUnit.setAttribute("class", "txt-final-payment-unit");
        txtFinalPaymentUnit.innerText = "원";
        numFinalPayment.appendChild(txtFinalPaymentUnit);
        listResult.append(txtFinalPayment, numFinalPayment);

        const styleWrapperFinalAgree = document.createElement("span");
        styleWrapperFinalAgree.setAttribute(
            "class",
            "style-wrapper-final-agree"
        );

        const checkFinalAgree = document.createElement("input");
        checkFinalAgree.setAttribute("type", "checkbox");
        checkFinalAgree.setAttribute("id", "check-final-agree");
        checkFinalAgree.setAttribute("required", true);
        const checkFinalLabel = document.createElement("label");
        checkFinalLabel.setAttribute("for", "check-final-agree");
        checkFinalLabel.innerText =
            "주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.";

        const buttonPayment = document.createElement("button");
        buttonPayment.setAttribute("type", "submit");
        buttonPayment.setAttribute("class", "button-payment");
        buttonPayment.disabled = true;
        buttonPayment.classList.add("off");
        buttonPayment.innerText = "결제하기";

        styleWrapperFinalAgree.append(checkFinalAgree, checkFinalLabel);
        styleWrapperGray.append(styleWrapperFinalAgree, buttonPayment);

        if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            numFinalPrice.append(
                Number(
                    JSON.parse(window.localStorage.getItem("fromDetail"))
                        .selectedTotal
                ).toLocaleString("ko-KR"),
                txtFinalUnit1
            );
            numFinalShipping.innerText = Number(
                JSON.parse(
                    window.localStorage.getItem("fromDetail")
                ).shipping.replace(/\D/g, "")
            ).toLocaleString("ko-KR");
            numFinalPayment.append(
                (
                    Number(
                        JSON.parse(window.localStorage.getItem("fromDetail"))
                            .selectedTotal
                    ) +
                    Number(
                        JSON.parse(
                            window.localStorage.getItem("fromDetail")
                        ).shipping.replace(/\D/g, "")
                    )
                ).toLocaleString("ko-KR"),
                txtFinalPaymentUnit
            );
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            numFinalPrice.append(
                Number(
                    JSON.parse(window.localStorage.getItem("total"))
                        .selectedTotalPrice
                ).toLocaleString("ko-KR"),
                txtFinalUnit1
            );
            numFinalShipping.innerText = Number(
                JSON.parse(window.localStorage.getItem("total"))
                    .selectedTotalShippingFee
            ).toLocaleString("ko-KR");
            numFinalPayment.append(
                Number(
                    JSON.parse(window.localStorage.getItem("total")).amount
                ).toLocaleString("ko-KR"),
                txtFinalPaymentUnit
            );
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            numFinalPrice.append(
                Number(
                    JSON.parse(window.localStorage.getItem("fromCartOne"))[0]
                        .totalPrice
                ).toLocaleString("ko-KR"),
                txtFinalUnit1
            );
            numFinalShipping.innerText = Number(
                JSON.parse(window.localStorage.getItem("fromCartOne"))[0]
                    .shippingFee
            ).toLocaleString("ko-KR");
            numFinalPayment.append(
                (
                    Number(
                        JSON.parse(localStorage.getItem("fromCartOne"))[0]
                            .totalPrice
                    ) +
                    Number(
                        JSON.parse(localStorage.getItem("fromCartOne"))[0]
                            .shippingFee
                    )
                ).toLocaleString("ko-KR"),
                txtFinalPaymentUnit
            );
        }

        numFinalDiscount.append("0", txtFinalUnit2);
        numFinalShipping.appendChild(txtFinalUnit3);
        list1.append(txtFinalPrice, numFinalPrice);
        list2.append(txtFinalDiscount, numFinalDiscount);
        list3.append(txtFinalShipping, numFinalShipping);
        finalCalcElement.append(list1, list2, list3);
        finalCalcResult.append(listResult);
        styleWrapperFinal.append(finalCalcElement, finalCalcResult);
        this.article.append(title, styleWrapperFinal, styleWrapperGray);

        setTimeout(() => {
            const input = document.getElementsByTagName("input");
            const messages = document.querySelectorAll(
                ".payment-error-message"
            );
            let arrMessages = [];

            for (let j = 0; j < input.length; j++) {
                input[j].addEventListener("input", () => {
                    for (let i = 0; i < messages.length; i++) {
                        arrMessages.push(messages[i].innerText);
                    }
                    changeButtonState();
                });
            }
            function changeButtonState() {
                arrMessages.length = 0;
                if (
                    arrMessages.every((currentString) => {
                        currentString === "";
                    }) &&
                    checkFinalAgree.checked === true
                ) {
                    buttonPayment.disabled = false;
                    buttonPayment.classList.remove("off");
                } else {
                    buttonPayment.disabled = true;
                    buttonPayment.classList.add("off");
                }
            }
        }, 1500);

        buttonPayment.addEventListener("click", (e) => {
            e.preventDefault();
            const product_id = () => {
                if (window.localStorage.getItem("path") === "1") {
                    let product_id = Number(
                        JSON.parse(window.localStorage.getItem("fromDetail"))
                            .productId
                    );

                    return product_id;
                } else if (window.localStorage.getItem("path") === "2") {
                    let product_id = "";

                    return product_id;
                } else if (window.localStorage.getItem("path") === "3") {
                    let product_id = Number(
                        JSON.parse(
                            window.localStorage.getItem("fromCartOne")
                        )[0].productId
                    );

                    return product_id;
                }
            };

            const quantity = () => {
                if (window.localStorage.getItem("path") === "1") {
                    let quantity = Number(
                        JSON.parse(window.localStorage.getItem("fromDetail"))
                            .selectedQt
                    );

                    return quantity;
                } else if (window.localStorage.getItem("path") === "2") {
                    let quantity = "";

                    return quantity;
                } else if (window.localStorage.getItem("path") === "3") {
                    let quantity = Number(
                        JSON.parse(
                            window.localStorage.getItem("fromCartOne")
                        )[0].selectedQt
                    );

                    return quantity;
                }
            };

            let receiver = document.querySelector(
                "#input-recipient-name"
            ).value;
            let receiver_phone_number =
                document.querySelectorAll(".phone-container")[1].children[0]
                    .value +
                document.querySelectorAll(".phone-container")[1].children[2]
                    .value +
                document.querySelectorAll(".phone-container")[1].children[4]
                    .value;
            let address =
                document.getElementById("input-address-main").value +
                " " +
                document.getElementById("input-address-sub").value;
            let address_message =
                document.getElementById("input-message").value;

            let payment_method_Nodes =
                document.getElementsByName("payment_method");

            const payment_method = () => {
                for (let i = 0; i < payment_method_Nodes.length; i++) {
                    if (payment_method_Nodes[i].checked) {
                        let payment_method = payment_method_Nodes[i].value;
                        return payment_method;
                    }
                }
            };

            const order_kind = () => {
                if (window.localStorage.getItem("path") === "1") {
                    let order_kind = "direct_order";

                    return order_kind;
                } else if (window.localStorage.getItem("path") === "2") {
                    let order_kind = "cart_order";

                    return order_kind;
                } else if (window.localStorage.getItem("path") === "3") {
                    let order_kind = "cart_one_order";

                    return order_kind;
                }
            };

            const total_price = () => {
                if (window.localStorage.getItem("path") === "1") {
                    let total_price =
                        Number(
                            JSON.parse(
                                window.localStorage.getItem("fromDetail")
                            ).selectedTotal
                        ) +
                        Number(
                            JSON.parse(
                                window.localStorage.getItem("fromDetail")
                            ).shipping.replace(/\D/g, "")
                        );

                    return total_price;
                } else if (window.localStorage.getItem("path") === "2") {
                    const fromCartItems = JSON.parse(
                        localStorage.getItem("fromCartItems")
                    );

                    const allShippingFee = fromCartItems
                        .map((item) => Number(item.shippingFee))
                        .reduce((a, b) => {
                            return a + b;
                        });

                    let total_price =
                        Number(
                            JSON.parse(window.localStorage.getItem("total"))
                                .selectedTotalPrice
                        ) + allShippingFee;

                    return total_price;
                } else if (window.localStorage.getItem("path") === "3") {
                    let total_price =
                        Number(
                            JSON.parse(
                                window.localStorage.getItem("fromCartOne")
                            )[0].totalPrice
                        ) +
                        Number(
                            JSON.parse(
                                window.localStorage.getItem("fromCartOne")
                            )[0].shippingFee
                        );
                    return total_price;
                }
            };

            order();

            async function order() {
                await fetch(`${API_URL}/order/`, {
                    method: "POST",
                    headers: {
                        Authorization: `JWT ${window.localStorage.getItem(
                            "token"
                        )}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        product_id: product_id(),
                        quantity: quantity(),
                        order_kind: order_kind(),
                        receiver: receiver,
                        receiver_phone_number: receiver_phone_number,
                        address: address,
                        address_message: address_message,
                        payment_method: payment_method(),
                        total_price: total_price(),
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        alert(
                            `🎉 ${data.order_items.length}개의 상품이 주문되었습니다. 🎉`
                        );
                        window.location.href = "/";
                    })
                    .catch((e) => console.error(e));
            }
        });

        return this.article;
    }
}

export default FinalPayInfo;
