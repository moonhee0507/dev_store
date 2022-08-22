const numCartSum = document.querySelector(".num-cart-sum");
const numCartMinus = document.querySelector(".num-cart-minus");
const numCartSumShipping = document.querySelector(".num-cart-sum-shipping");
const numAmount = document.querySelector(".num-amount");
const allCheckBox = document.querySelectorAll(".button-cart-check");

// 각 상품금액(카트상품별 맨 우측)
const eachSumPrice = document.querySelectorAll(".cart-number-total-price");
// 각 배송비(카트상품별 상품정보 하단)
const eachShippingFee = document.querySelectorAll(".cart-shipping-fee"); //"500원" "4,000원" "무료배송"
// 품절 감별
const isSoldout = document.querySelectorAll(".input-quantity");

// 체크박스를 클릭할 때마다 새로 계산
for (let i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].addEventListener("click", calc);
}

function calc() {
    // 총 상품금액
    let priceSum = 0;
    for (let i = 0; i < eachSumPrice.length; i++) {
        priceSum += Number(
            allCheckBox[i + 1].className.includes("fill") &&
                eachSumPrice[i].innerText.replace(",", "")
        );
    }
    console.log("총 상품금액", priceSum);
    numCartSum.innerText = `${priceSum.toLocaleString("ko-KR")}원`;

    // 총 상품할인
    let discount = Number(numCartMinus.innerText.replace("원", ""));
    console.log("상품 할인", discount);

    // 총 배송비
    let shippingSum = 0;
    for (let i = 0; i < eachShippingFee.length; i++) {
        shippingSum +=
            !(isSoldout[i].value === "0") &&
            Number(
                allCheckBox[i + 1].className.includes("fill") &&
                    eachShippingFee[i].innerText.replace(/\D/g, "")
            );
    }
    console.log("총 배송비", shippingSum);
    numCartSumShipping.innerText = `${shippingSum.toLocaleString("ko-KR")}원`;

    // 결제예정금액
    console.log("결제 예정 금액", priceSum - discount + shippingSum);
    numAmount.innerText = `${(priceSum - discount + shippingSum).toLocaleString(
        "ko-KR"
    )}원`;
}

calc();

// i번째 버튼을 누르면 i번째 모달 뜨기(수량 변경)
const cartQtButton = document.querySelectorAll(".style-wrapper-quantity.cart"); // 6개(모달의 수량버튼까지)
const modalForQt = document.querySelector(".change-modal-group").childNodes;
const modalForDelete = document.querySelector(".delete-modal-group").childNodes;
const stock = document.querySelectorAll(".cart-num-stock");

for (let i = 0; i < cartQtButton.length / 2; i++) {
    // cartQtButton.length / 2 = 페이지의 수량버튼만 계산
    cartQtButton[i].addEventListener("click", () => {
        // stock이 0이 아니면 모달창 뜨기
        stock[i].innerText !== "0" && modalForQt[i].classList.add("show");
        // 모달 class가 show면 body의 overflow hidden처리
        if (modalForQt[i].classList.contains("show")) {
            const body = document.querySelector("body");
            body.style.overflow = "hidden";
        }
    });
}

// i번째 버튼을 누르면 i번째 모달 뜨기(장바구니 상품 삭제)
const cartCloseButton = document.querySelectorAll(".button-close-cart");
for (let i = 0; i < cartCloseButton.length; i++) {
    cartCloseButton[i].addEventListener("click", () => {
        modalForDelete[i].classList.add("show");
        // 모달 class가 show면 body의 overflow hidden처리
        if (modalForDelete[i].classList.contains("show")) {
            const body = document.querySelector("body");
            body.style.overflow = "hidden";
        }
    });
}
