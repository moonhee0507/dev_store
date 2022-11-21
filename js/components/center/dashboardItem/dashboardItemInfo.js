import { ItemImage, ItemName, ItemStock } from "./index.js";

class DashboardItemInfo {
    constructor(item) {
        this.item = item;
        this.styleContainer = document.createElement("div");
    }

    render() {
        this.styleContainer.setAttribute(
            "class",
            "style-container-center-col1"
        );

        const itemImage = new ItemImage(this.item.product_id, this.item.image);

        const nameStockWrapper = document.createElement("div");
        const itemName = new ItemName(this.item.product_name);
        const itemStock = new ItemStock(this.item.stock);

        nameStockWrapper.append(itemName.render(), itemStock.render());
        this.styleContainer.append(itemImage.render(), nameStockWrapper);

        return this.styleContainer;
    }
}

export default DashboardItemInfo;
