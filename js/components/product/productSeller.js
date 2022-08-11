class ProductSeller {
    constructor(store) {
        this.store = store;
    }

    render() {
        // 셀러
        const productSeller = document.createElement("p");
        productSeller.innerText = this.store;

        return productSeller;
    }
}

export default ProductSeller;
