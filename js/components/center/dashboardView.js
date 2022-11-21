import { getSeller } from "../../common/api.js";
import DashboardItemList from "./dashboardItemList.js";

class DashboardView {
    constructor() {
        this.view = document.createElement("div");
        this.products = {};
        this.productsOnAllPages = [];
    }

    async getProductsData() {
        const token = window.localStorage.getItem("token");
        let count = parseInt(window.localStorage.getItem("sellerCount"));
        for (let i = 1; i < count / 15 + 1; i++) {
            const data = await getSeller(token, i);
            this.products = await data.results;
            this.productsOnAllPages.push(...this.products);
        }
    }

    async setProductList() {
        await this.getProductsData();

        this.view.setAttribute("class", "center-view");
        const tableHead = document.createElement("div");
        tableHead.setAttribute("class", "view-head");
        const ul = document.createElement("ul");
        ul.setAttribute("class", "view-list");

        let titleRowClassName = ["product-info", "price", "edit", "delete"];
        let titleRowText = ["상품정보", "판매가격", "수정", "삭제"];
        for (let i = 0; i < titleRowClassName.length; i++) {
            const li = document.createElement("li");
            li.setAttribute("class", "center-head");
            li.classList.add(titleRowClassName[i]);
            li.innerText = titleRowText[i];
            ul.appendChild(li);
        }
        tableHead.appendChild(ul);

        const tableBody = document.createElement("div");
        tableBody.setAttribute("class", "view-body");

        this.productsOnAllPages.forEach((item) => {
            const dashboardItemList = new DashboardItemList(item);
            tableBody.appendChild(dashboardItemList.render());
        });

        if (this.productsOnAllPages.length === 0) {
            const msgNoProduct = document.createElement("p");
            msgNoProduct.setAttribute("class", "message-no-products");
            msgNoProduct.innerText = "등록된 상품이 없습니다.";
            tableBody.appendChild(msgNoProduct);
        }

        this.view.append(tableHead, tableBody);
    }

    render() {
        this.setProductList();

        return this.view;
    }
}

export default DashboardView;
