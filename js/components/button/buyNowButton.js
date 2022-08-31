class BuyNowButton {
    constructor(stock) {
        this.stock = stock;
        this.button = document.createElement("button");
    }

    render() {
        // 상품 상세페이지
        if (window.location.pathname.includes("/products/")) {
            this.button.setAttribute("class", "button-buy");
            this.button.innerText = "바로 구매";

            const body = document.querySelector("body");
            const modal = document.querySelector(".modal");
            const buttonClose = document.querySelector(".button-close");
            const buttonNo = document.querySelector(".button-no");
            const buttonYes = document.querySelector(".button-yes");

            if (this.stock === 0) {
                this.button.disabled = true;
                this.button.style.cursor = "default";
                this.button.innerText = "구매 불가";
            }

            // 클릭이벤트
            this.button.addEventListener("click", () => {
                // 로그인 되어 있으면 /payment 이동
                // 로그인이 안되어 있으면 로그인 안내 모달 띄우기
                if (window.localStorage.getItem("token")) {
                    // 로컬스토리지에 상품정보 저장하기
                    let productId = document.location.pathname
                        .split("/")
                        .slice(-1)
                        .join();
                    let src = document.querySelector(".img-product").src;
                    let seller =
                        document.querySelector(".detail-txt-seller").innerText;
                    let productName = document.querySelector(
                        ".detail-txt-product-name"
                    ).innerText;
                    let selectedQt = document
                        .querySelector(".detail-number-total-quantity")
                        .innerText.replace(",", "");
                    let shipping = document.querySelector(
                        ".detail-shipping-fee"
                    ).innerText;
                    let selectedTotal = document
                        .querySelector(".detail-number-total-price")
                        .innerText.replace(",", "");

                    const fromDetail = {
                        productId: productId,
                        src: src,
                        seller: seller,
                        productName: productName,
                        selectedQt: selectedQt,
                        shipping: shipping,
                        selectedTotal: selectedTotal,
                    };

                    window.localStorage.setItem(
                        "fromDetail",
                        JSON.stringify(fromDetail)
                    );

                    window.localStorage.setItem("path", "1");

                    window.location.pathname = "/payment";
                } else {
                    // 로그인 안내 모달 띄우기
                    modal.classList.toggle("show");

                    // 모달 class가 show면 body의 overflow hidden처리
                    if (modal.classList.contains("show")) {
                        body.style.overflow = "hidden";
                    }
                }
            });

            // 바깥부분 클릭하면 모달창이 없어지는 기능
            modal.addEventListener("click", (e) => {
                const target = e.target;
                if (target.classList.contains("show")) {
                    target.classList.remove("show");
                    body.style.overflow = "auto";
                }
            });

            // x 버튼 클릭하면 모달창이 없어지는 기능
            buttonClose.addEventListener("click", () => {
                modal.classList.remove("show");
                body.style.overflow = "auto";
            });

            // 아니오 버튼 누르면 모달창이 없어지는 기능
            buttonNo.addEventListener("click", () => {
                modal.classList.remove("show");
                body.style.overflow = "auto";
            });

            // 예 버튼을 누르면 로그인 페이지로 이동하는 기능
            buttonYes.addEventListener("click", () => {
                window.location.pathname = "/login";
            });

            // 장바구니 페이지(하단)
        } else if (window.location.pathname === "/cart") {
            this.button.setAttribute("class", "button-buy middle");
            this.button.innerText = "주문하기";
            this.button.addEventListener("click", () => {
                const initialCartStorage = JSON.parse(
                    localStorage.getItem("fromCartItems")
                );
                const imgProduct = document.querySelectorAll(".img-product");
                const sellerName =
                    document.querySelectorAll(".cart-txt-seller");
                const productName = document.querySelectorAll(
                    ".cart-txt-product-name"
                );
                const shippingFee =
                    document.querySelectorAll(".cart-shipping-fee");
                const productPrice = document.querySelectorAll(
                    ".cart-txt-price-number"
                );
                const totalPrice = document.querySelectorAll(
                    ".cart-number-total-price"
                );

                const selectedTotalPrice = document
                    .querySelector(".num-cart-sum")
                    .innerText.replace(/\D/g, "");
                const selectedTotalShippingFee = document
                    .querySelector(".num-cart-sum-shipping")
                    .innerText.replace(/\D/g, "");
                const amount = document
                    .querySelector(".num-amount")
                    .innerText.replace(/\D/g, "");

                for (let i = 0; i < initialCartStorage.length; i++) {
                    initialCartStorage[i].src = imgProduct[i].src;
                    initialCartStorage[i].sellerName = sellerName[i].innerText;
                    initialCartStorage[i].productName =
                        productName[i].innerText;
                    initialCartStorage[i].productPrice = productPrice[
                        i
                    ].innerText.replace(/\D/g, "");
                    initialCartStorage[i].shippingFee = shippingFee[
                        i
                    ].innerText.replace(/\D/g, "");
                    initialCartStorage[i].totalPrice = totalPrice[
                        i
                    ].innerText.replace(/\D/g, "");
                }
                const total = {
                    selectedTotalPrice: selectedTotalPrice,
                    selectedTotalShippingFee: selectedTotalShippingFee,
                    amount: amount,
                };
                localStorage.setItem("total", JSON.stringify(total));
                localStorage.removeItem("fromCartItems");
                localStorage.setItem(
                    "fromCartItems",
                    JSON.stringify(initialCartStorage)
                );

                // 로컬스토리지의 값이 checked가 true 이면서, selectedQt가 0이 아닌 것 추출
                const filteredFromCartItems = JSON.parse(
                    window.localStorage.getItem("fromCartItems")
                ).filter((el) => {
                    return el.checked === "true" && el.selectedQt !== "0";
                });

                if (filteredFromCartItems.length > 0) {
                    // fromCartItems 새로 저장(/payment 최종 전달)
                    window.localStorage.setItem(
                        "filteredFromCartItems",
                        JSON.stringify(filteredFromCartItems)
                    );
                    window.localStorage.setItem("path", "2");
                    window.location.pathname = "/payment";
                } else {
                    alert("선택된 상품이 없습니다.");
                }
            });
        }

        return this.button;
    }
}

export default BuyNowButton;
