class SellerNameCard {
    constructor(store_name) {
        this.article = document.createElement("article");
        this.store_name = store_name;
    }

    render() {
        this.article.setAttribute("class", "responsive-seller-name");
        const sellerName = document.createElement("p");
        sellerName.setAttribute("class", "responsive-txt-seller");
        sellerName.innerText = this.store_name;
        this.article.appendChild(sellerName);

        return this.article;
    }
}

export default SellerNameCard;
