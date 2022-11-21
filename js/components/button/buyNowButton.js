class BuyNowButton {
    constructor(stock) {
        this.stock = stock;
        this.button = document.createElement("button");
    }

    render() {
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
            this.button.addEventListener("click", () => {
                const isSeller =
                    window.localStorage.getItem("loginType") === "SELLER"
                        ? true
                        : false;
                if (isSeller) {
                    alert("🚫 판매자는 사용할 수 없는 서비스입니다.");
                } else if (window.localStorage.getItem("token")) {
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

                    window.location.href = "/payment";
                } else {
                    modal.classList.toggle("show");
                    if (modal.classList.contains("show")) {
                        body.style.overflow = "hidden";
                    }
                }
            });
            modal.addEventListener("click", (e) => {
                const target = e.target;
                if (target.classList.contains("show")) {
                    target.classList.remove("show");
                    body.style.overflow = "auto";
                }
            });
            buttonClose.addEventListener("click", () => {
                modal.classList.remove("show");
                body.style.overflow = "auto";
            });
            buttonNo.addEventListener("click", () => {
                modal.classList.remove("show");
                body.style.overflow = "auto";
            });
            buttonYes.addEventListener("click", () => {
                window.location.href = "/login";
            });
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
                const filteredFromCartItems = JSON.parse(
                    window.localStorage.getItem("fromCartItems")
                ).filter((el) => {
                    return el.checked === "true" && el.selectedQt !== "0";
                });

                if (filteredFromCartItems.length > 0) {
                    window.localStorage.setItem(
                        "filteredFromCartItems",
                        JSON.stringify(filteredFromCartItems)
                    );
                    window.localStorage.setItem("path", "2");
                    window.location.href = "/payment";
                } else {
                    alert("선택된 상품이 없습니다.");
                }
            });
        }

        return this.button;
    }
}

export default BuyNowButton;
