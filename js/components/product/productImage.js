class ProductImage {
    constructor(src) {
        this.src = src;
    }

    render() {
        const productImgContainer = document.createElement("div");

        if (window.location.pathname === "/") {
            productImgContainer.setAttribute("class", "style-wrapper-img");
        } else if (window.location.pathname.includes("/products/")) {
            productImgContainer.setAttribute(
                "class",
                "style-wrapper-img large"
            );
        }

        const productImg = document.createElement("img");
        productImg.setAttribute("class", "img-product");
        productImg.setAttribute("src", `${this.src}`);
        productImg.setAttribute("alt", "상품이미지");
        productImgContainer.appendChild(productImg);

        return productImgContainer;
    }
}

export default ProductImage;
