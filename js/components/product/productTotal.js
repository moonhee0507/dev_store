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
                    const fromCartOne = JSON.parse(
                        localStorage.getItem("filteredFromCartItems")
                    ).filter((el) => {
                        return el.productId === `${this.product_id}`;
                    });
                    localStorage.setItem(
                        "fromCartOne",
                        JSON.stringify(fromCartOne)
                    );
                    window.location.pathname = "/payment";
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
