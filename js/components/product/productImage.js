class ProductImage {
    constructor(src) {
        this.src = src;
    }

    render() {
        // 상품 이미지
        const productImgContainer = document.createElement("div");
        productImgContainer.setAttribute("class", "style-wrapper-img");

        const productImg = document.createElement("img");
        productImg.setAttribute("class", "img-product");
        productImg.setAttribute("src", `${this.src}`);
        productImg.setAttribute("alt", "상품이미지");
        productImgContainer.appendChild(productImg);

        return productImgContainer;
    }
}

export default ProductImage;
