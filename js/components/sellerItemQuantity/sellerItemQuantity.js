import { API_URL } from "../../common/constants";

class SellerItemQuantity {
    constructor(store, seller) {
        this.store = store;
        this.seller = seller;
        this.div = document.createElement("div");
        this.products = {};
    }

    async getProductData() {
        const res = await fetch(`${API_URL}/products/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        this.products = await data.results.filter((el) => {
            return el.store_name === this.store;
        });
    }

    async setProductData() {
        await this.getProductData();

        this.div.setAttribute("class", "container-product-quantity-link");
        const p = document.createElement("p");
        p.setAttribute("class", "search-txt-quantity");
        const span = document.createElement("span");
        span.setAttribute("class", "search-number-quantity");
        span.innerText = this.products.length;

        p.append("상품수", span);

        const a = document.createElement("a");
        a.setAttribute("href", `/store/${this.seller}`);
        a.setAttribute("class", "link-all-products");
        a.innerText = "전체상품 보기";
        this.div.append(p, a);
    }

    render() {
        this.setProductData();

        return this.div;
    }
}

export default SellerItemQuantity;
