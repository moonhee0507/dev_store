import getProducts from "../../common/api.js";

class SellerItemQuantity {
    constructor(store, seller) {
        this.store = store;
        this.seller = seller;
        this.div = document.createElement("div");
        this.products = {};
        this.productsOnAllPages = [];
    }

    async getProductData() {
        let count = parseInt(window.localStorage.getItem("count"));
        for (let i = 1; i < count / 15 + 1; i++) {
            const data = await getProducts(i, false);
            this.products = await data.results.filter((el) => {
                return el.store_name === this.store;
            });
            this.productsOnAllPages.push(...this.products);
        }
    }

    async setProductData() {
        await this.getProductData();

        this.div.setAttribute("class", "container-product-quantity-link");
        const p = document.createElement("p");
        p.setAttribute("class", "search-txt-quantity");
        const span = document.createElement("span");
        span.setAttribute("class", "search-number-quantity");
        span.innerText = this.productsOnAllPages.length;

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
