import {
    ProductName,
    ProductPrice,
    ProductDescription,
    RegistrationDate,
} from "../product/index.js";

class SearchInfoMain {
    constructor(item) {
        this.item = item;
        this.ul = document.createElement("ul");
    }

    render() {
        this.ul.setAttribute("class", "search-product-info");

        const productName = new ProductName(
            this.item.product_name,
            this.item.product_id
        );
        const productPrice = new ProductPrice(this.item.price);
        const productDescription = new ProductDescription(
            this.item.product_info
        );
        const registrationDate = new RegistrationDate(this.item.product_id);

        let arrContent = [
            productName,
            productPrice,
            productDescription,
            registrationDate,
        ];

        for (let i = 0; i < arrContent.length; i++) {
            const li = document.createElement("li");
            li.appendChild(arrContent[i].render());

            this.ul.appendChild(li);
        }

        return this.ul;
    }
}

export default SearchInfoMain;
