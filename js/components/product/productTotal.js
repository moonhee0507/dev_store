class ProductTotal {
    constructor(stock, price, quantity, product_id) {
        this.stock = stock;
        this.price = price;
        this.quantity = quantity;
        this.product_id = product_id;
        this.li = document.createElement("li");
        this.div = document.createElement("div");
    }

    render() {
        // 상품 상세페이지
        if (window.location.pathname.includes("/products/")) {
            const totalWrapper = document.createElement("div");
            const txtTotalPrice = document.createElement("strong");
            const totalContainer = document.createElement("div");
            totalWrapper.setAttribute("class", "style-wrapper-total");
            txtTotalPrice.setAttribute("class", "detail-txt-total-price");
            txtTotalPrice.innerText = "총 상품 금액";
            totalContainer.setAttribute("class", "style-container-total");

            const txtTotalQuantity = document.createElement("p");
            const numTotalPrice = document.createElement("strong");
            const txtTotalPriceUnit = document.createElement("span");
            txtTotalQuantity.setAttribute("class", "detail-txt-total-quantity");
            txtTotalQuantity.innerHTML = `
                총 수량 <span class="detail-number-total-quantity">1</span>개
            `;
            numTotalPrice.setAttribute("class", "detail-number-total-price");
            numTotalPrice.innerText = this.price.toLocaleString("ko-KR");
            txtTotalPriceUnit.setAttribute(
                "class",
                "detail-txt-total-price-unit"
            );
            txtTotalPriceUnit.innerText = "원";

            if (this.stock === 0) {
                txtTotalQuantity.innerHTML = `
                    총 수량 <span class="detail-number-total-quantity">0</span>개
                `;
                numTotalPrice.innerText = "0";
            }

            totalContainer.append(
                txtTotalQuantity,
                numTotalPrice,
                txtTotalPriceUnit
            );
            totalWrapper.append(txtTotalPrice, totalContainer);
            this.li.appendChild(totalWrapper);
            // 장바구니 페이지
        } else if (window.location.pathname === "/cart") {
            this.div.setAttribute("class", "cart-last-col");

            const numTotalPrice = document.createElement("strong");
            const txtTotalPriceUnit = document.createElement("span");

            numTotalPrice.setAttribute("class", "cart-number-total-price");
            if (this.stock === 0) {
                numTotalPrice.innerText = 0;
            } else {
                numTotalPrice.innerText = (
                    this.price * this.quantity
                ).toLocaleString("ko-KR");
            }
            txtTotalPriceUnit.setAttribute(
                "class",
                "cart-txt-total-price-unit"
            );
            txtTotalPriceUnit.innerText = "원";

            const buyNowButtonSmall = document.createElement("button");
            buyNowButtonSmall.setAttribute("class", "button-buy small");
            buyNowButtonSmall.innerText = "주문하기";

            buyNowButtonSmall.addEventListener("click", () => {
                if (this.quantity === 0) {
                    alert(
                        "해당 상품은 품절입니다. \n판매자에게 입고일자를 확인해주세요."
                    );
                } else {
                    localStorage.setItem("path", "3");
                    // fromCartItems 스토리지에서 클릭 상품 가져오기
                    const initialCartStorage = JSON.parse(
                        localStorage.getItem("fromCartItems")
                    );
                    const imgProduct =
                        document.querySelectorAll(".img-product");
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
                        initialCartStorage[i].sellerName =
                            sellerName[i].innerText;
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

                    window.localStorage.setItem(
                        "filteredFromCartItems",
                        JSON.stringify(filteredFromCartItems)
                    );

                    const fromCartOne = JSON.parse(
                        localStorage.getItem("filteredFromCartItems")
                    ).filter((el) => {
                        return el.productId === `${this.product_id}`;
                    });
                    localStorage.setItem(
                        "fromCartOne",
                        JSON.stringify(fromCartOne)
                    );
                    window.location.href = "/payment";
                }
            });
            this.div.append(
                numTotalPrice,
                txtTotalPriceUnit,
                buyNowButtonSmall
            );
        }

        return window.location.pathname.includes("/products/")
            ? this.li
            : this.div;
    }
}

export default ProductTotal;
