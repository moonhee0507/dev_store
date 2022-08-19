class ProductImage {
    constructor(src) {
        this.src = src; // Home, Detail
        this.wrapper = document.createElement("div");
    }

    render() {
        if (window.location.pathname === "/") {
            this.wrapper.setAttribute("class", "style-wrapper-img");
        } else if (window.location.pathname.includes("/products/")) {
            this.wrapper.setAttribute("class", "style-wrapper-img large");
        } else if (window.location.pathname === "/cart") {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
        }

        const productImg = document.createElement("img");
        productImg.setAttribute("class", "img-product");
        productImg.setAttribute("src", `${this.src}`);
        productImg.setAttribute("alt", "상품이미지");
        this.wrapper.appendChild(productImg);

        return this.wrapper;
    }
}

export default ProductImage;
