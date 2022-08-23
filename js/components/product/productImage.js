class ProductImage {
    constructor(src, id) {
        this.src = src; // Home, Detail
        this.id = id; // Cart
        this.wrapper = document.createElement("div");
    }

    render() {
        if (window.location.pathname === "/") {
            this.wrapper.setAttribute("class", "style-wrapper-img");
        } else if (window.location.pathname.includes("/products/")) {
            this.wrapper.setAttribute("class", "style-wrapper-img large");
        } else if (
            window.location.pathname === "/cart" ||
            window.location.pathname === "/payment"
        ) {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            this.wrapper.addEventListener("click", () => {
                window.location.pathname = `/products/${this.id}`;
            });
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
