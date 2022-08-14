class ProductSeller {
    constructor(store) {
        this.store = store;
    }

    render() {
        // 셀러
        const productSeller = document.createElement("p");
        productSeller.setAttribute("class", "txt-seller");
        productSeller.innerText = this.store;

        return productSeller;
    }
}

export default ProductSeller;
