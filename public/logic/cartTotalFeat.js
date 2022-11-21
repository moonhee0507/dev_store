const numCartSum = document.querySelector(".num-cart-sum");
const numCartMinus = document.querySelector(".num-cart-minus");
const numCartSumShipping = document.querySelector(".num-cart-sum-shipping");
const numAmount = document.querySelector(".num-amount");
const allCheckBox = document.querySelectorAll(".button-cart-check");
const eachSumPrice = document.querySelectorAll(".cart-number-total-price");
const eachShippingFee = document.querySelectorAll(".cart-shipping-fee");
const isSoldout = document.querySelectorAll(".input-quantity");

for (let i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].addEventListener("click", () => {
        calc();
        editChecked();
    });
}

function calc() {
    let priceSum = 0;
    for (let i = 0; i < eachSumPrice.length; i++) {
        priceSum += Number(
            allCheckBox[i + 1].className.includes("fill") &&
                eachSumPrice[i].innerText.replace(/\D/g, "")
        );
    }
    console.log(priceSum);
    numCartSum.innerText = `${priceSum.toLocaleString("ko-KR")}원`;

    let discount = Number(numCartMinus.innerText.replace("원", ""));

    let shippingSum = 0;
    for (let i = 0; i < eachShippingFee.length; i++) {
        shippingSum +=
            !(isSoldout[i].value === "0") &&
            Number(
                allCheckBox[i + 1].className.includes("fill") &&
                    eachShippingFee[i].innerText.replace(/\D/g, "")
            );
    }
    numCartSumShipping.innerText = `${shippingSum.toLocaleString("ko-KR")}원`;
    numAmount.innerText = `${(priceSum - discount + shippingSum).toLocaleString(
        "ko-KR"
    )}원`;
}

calc();

const cartQtButton = document.querySelectorAll(".style-wrapper-quantity.cart");
const modalForQt = document.querySelector(".change-modal-group").childNodes;
const modalForDelete = document.querySelector(".delete-modal-group").childNodes;
const stock = document.querySelectorAll(".cart-num-stock");

for (let i = 0; i < cartQtButton.length / 2; i++) {
    cartQtButton[i].addEventListener("click", () => {
        stock[i].innerText !== "0" && modalForQt[i].classList.add("show");
        if (modalForQt[i].classList.contains("show")) {
            const body = document.querySelector("body");
            body.style.overflow = "hidden";
        }
    });
}

const cartCloseButton = document.querySelectorAll(".button-close-cart");
for (let i = 0; i < cartCloseButton.length; i++) {
    cartCloseButton[i].addEventListener("click", () => {
        modalForDelete[i].classList.add("show");
        if (modalForDelete[i].classList.contains("show")) {
            const body = document.querySelector("body");
            body.style.overflow = "hidden";
        }
    });
}

function editChecked() {
    const fromCartItems = JSON.parse(
        window.localStorage.getItem("fromCartItems")
    );
    for (let i = 0; i < allCheckBox.length - 1; i++) {
        if (allCheckBox[i + 1].className.includes("fill")) {
            fromCartItems[i].checked = "true";
            window.localStorage.setItem(
                "fromCartItems",
                JSON.stringify(fromCartItems)
            );
        } else {
            fromCartItems[i].checked = "false";
            window.localStorage.setItem(
                "fromCartItems",
                JSON.stringify(fromCartItems)
            );
        }
    }
}
