import { DashboardItemInfo, ItemPrice } from "./dashboardItem/index.js";
import { ProductEditButton, ProductDeleteButton } from "../button/index.js";
import DeleteItemModal from "../modal/deleteItemModal.js";

class DashboardItemList {
    constructor(item) {
        this.item = item;
        this.ul = document.createElement("ul");
    }

    render() {
        this.ul.setAttribute("class", "view-list add");
        const dashboardItemInfo = new DashboardItemInfo(this.item);
        const itemPrice = new ItemPrice(this.item.price);
        const productEditButton = new ProductEditButton(this.item.product_id);
        const productDeleteButton = new ProductDeleteButton(this.item);
        const deleteItemModal = new DeleteItemModal(this.item.product_id);
        let arrProductForSaleComponents = [
            dashboardItemInfo,
            itemPrice,
            productEditButton,
            productDeleteButton,
            deleteItemModal,
        ];

        for (let i = 0; i < arrProductForSaleComponents.length; i++) {
            const li = document.createElement("li");
            li.appendChild(arrProductForSaleComponents[i].render());
            this.ul.appendChild(li);
        }

        return this.ul;
    }
}

export default DashboardItemList;
